"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Tube, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { heroAnimState } from "@/lib/hero-anim-state";

/**
 * HeroScene — scroll-driven 3D cross-section of the heating floor build-up:
 * subfloor -> insulation -> heating mat (glowing coil) -> finish surface.
 *
 * Reads the shared mutable `heroAnimState` every frame (no React re-renders).
 * The driver loop below syncs the scroll `progressRef` into the anim state:
 *
 *   separation       -> floor layers explode apart
 *   cableIntensity   -> heating coil emissive glow
 *   thermalIntensity -> thermal field glow rising above the finish surface
 *   warmth           -> warm light ramp over the scene
 *
 * Visual language matches components/about/hero-canvas.tsx.
 */

/* ------------------------------------------------------------------ */
/* Palette                                                             */
/* ------------------------------------------------------------------ */

const PALETTE = {
  subfloor: "#6B6153",
  insulation: "#D9CDBB",
  matBody: "#3A342C",
  finish: "#EADFCC",
  coil: "#C1652E",
  coilGlow: "#FF8A3D",
};

/* ------------------------------------------------------------------ */
/* Geometry                                                            */
/* ------------------------------------------------------------------ */

const LAYER_W = 4.2;
const LAYER_D = 2.6;
const BASE_ROT_Y = -0.5;

/** Stacked (touching) start positions. */
const STACKED = { subfloor: -0.6, insulation: -0.2, mat: 0.15, finish: 0.42 };
/** Exploded target offsets once separation reaches 1. */
const EXPLODED = { subfloor: -1.5, insulation: -0.42, mat: 0.5, finish: 1.35 };

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

type LayerProps = {
  y: number;
  height: number;
  color: string;
  radius?: number;
  children?: React.ReactNode;
};

function Layer({ y, height, color, radius = 0.03, children }: LayerProps) {
  return (
    <group position={[0, y, 0]}>
      <RoundedBox args={[LAYER_W, height, LAYER_D]} radius={radius} smoothness={4}>
        <meshStandardMaterial color={color} roughness={0.85} metalness={0.02} />
      </RoundedBox>
      {children}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* Heating coil (serpentine path)                                      */
/* ------------------------------------------------------------------ */

function HeatingCoil() {
  const curve = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const turns = 6;
    const w = LAYER_W * 0.84;
    const d = LAYER_D * 0.76;
    const steps = 250;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = -w / 2 + t * w;
      const z = Math.sin(t * turns * Math.PI * 2) * (d / 2);
      points.push(new THREE.Vector3(x, 0, z));
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);

  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(() => {
    if (matRef.current) {
      const pulse = 1 + Math.sin(heroAnimState.time * 2.2) * 0.12;
      matRef.current.emissiveIntensity =
        (0.25 + heroAnimState.cableIntensity * 3.2) * pulse;
    }
  });

  return (
    <Tube args={[curve, 250, 0.04, 8, false]}>
      <meshStandardMaterial
        ref={matRef}
        color={PALETTE.coil}
        emissive={PALETTE.coilGlow}
        emissiveIntensity={0.25}
        roughness={0.4}
        metalness={0.3}
      />
    </Tube>
  );
}

/* ------------------------------------------------------------------ */
/* Thermal field — soft additive glow rising from the finish surface   */
/* ------------------------------------------------------------------ */

function ThermalField() {
  const texture = useMemo(() => {
    const size = 128;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2,
      );
      grad.addColorStop(0, "rgba(255,138,61,0.55)");
      grad.addColorStop(0.5, "rgba(255,138,61,0.18)");
      grad.addColorStop(1, "rgba(255,138,61,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);

  const nearRef = useRef<THREE.Mesh>(null);
  const farRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const t = heroAnimState.thermalIntensity;
    const pulse = 1 + Math.sin(heroAnimState.time * 1.4) * 0.06;

    if (nearRef.current) {
      const mat = nearRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = t * 0.5 * pulse;
    }
    if (farRef.current) {
      const mat = farRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = t * 0.28 * pulse;
      farRef.current.position.y = 1.0 + t * 0.25;
    }
  });

  return (
    <group>
      <mesh ref={nearRef} position={[0, 0.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[LAYER_W * 1.05, LAYER_D * 1.1]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={farRef} position={[0, 1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[LAYER_W * 1.5, LAYER_D * 1.6]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* Cross-section assembly                                              */
/* ------------------------------------------------------------------ */

function CrossSection() {
  const group = useRef<THREE.Group>(null);
  const subfloorRef = useRef<THREE.Group>(null);
  const insulationRef = useRef<THREE.Group>(null);
  const matRef = useRef<THREE.Group>(null);
  const finishRef = useRef<THREE.Group>(null);

  useFrame(() => {
    const s = heroAnimState.separation;

    if (subfloorRef.current)
      subfloorRef.current.position.y = lerp(STACKED.subfloor, EXPLODED.subfloor, s);
    if (insulationRef.current)
      insulationRef.current.position.y = lerp(STACKED.insulation, EXPLODED.insulation, s);
    if (matRef.current)
      matRef.current.position.y = lerp(STACKED.mat, EXPLODED.mat, s);
    if (finishRef.current)
      finishRef.current.position.y = lerp(STACKED.finish, EXPLODED.finish, s);

    if (group.current) {
      // Gentle sway driven by shared time — no perpetual spin.
      group.current.rotation.y =
        BASE_ROT_Y + Math.sin(heroAnimState.time * 0.12) * 0.05;
    }
  });

  return (
    <group ref={group} rotation={[0.14, BASE_ROT_Y, 0]}>
      <group ref={subfloorRef} position={[0, STACKED.subfloor, 0]}>
        <Layer y={0} height={0.5} color={PALETTE.subfloor} />
      </group>
      <group ref={insulationRef} position={[0, STACKED.insulation, 0]}>
        <Layer y={0} height={0.28} color={PALETTE.insulation} />
      </group>
      <group ref={matRef} position={[0, STACKED.mat, 0]}>
        <Layer y={0} height={0.16} color={PALETTE.matBody}>
          <HeatingCoil />
        </Layer>
      </group>
      <group ref={finishRef} position={[0, STACKED.finish, 0]}>
        <Layer y={0} height={0.14} color={PALETTE.finish} radius={0.02}>
          <ThermalField />
        </Layer>
      </group>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* Warm light — ramps up with warmth                                   */
/* ------------------------------------------------------------------ */

function WarmLight() {
  const ref = useRef<THREE.PointLight>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.intensity = 0.35 + heroAnimState.warmth * 1.6;
    }
  });

  return (
    <pointLight
      ref={ref}
      position={[0, 0.6, 0]}
      color={PALETTE.coilGlow}
      distance={5}
      intensity={0.35}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Main export                                                         */
/* ------------------------------------------------------------------ */

interface HeroSceneProps {
  progressRef: React.RefObject<number>;
  reducedMotion: boolean;
}

export function HeroScene({ progressRef }: HeroSceneProps) {
  // Driver loop: advance shared time and sync scroll progress into
  // the anim state. Children below read heroAnimState in their own
  // useFrame handlers — no React re-renders.
  useFrame((_, delta) => {
    const s = heroAnimState;
    s.time += Math.min(delta, 0.1);

    const p = Math.min(1, Math.max(0, progressRef.current));
    s.separation = smoothstep(0.02, 0.2, p);
    s.cableIntensity = smoothstep(0.1, 0.28, p);
    s.thermalIntensity = smoothstep(0.3, 0.5, p);
    s.warmth = smoothstep(0.15, 0.7, p);
  });

  return (
    <>
      {/* Fog matching the homepage background */}
      <fog attach="fog" args={["#11100E", 9, 24]} />

      {/* Lighting */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 7, 4]} intensity={1.35} color="#faf7f2" />
      <directionalLight position={[-3, 2, -4]} intensity={0.2} color="#EADFCC" />
      <WarmLight />

      {/* Floor cross-section */}
      <CrossSection />

      {/* Environment for material reflections */}
      <Environment resolution={128}>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 4, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial color="#1a1a1a" side={THREE.DoubleSide} />
        </mesh>
      </Environment>

      {/* Post-processing */}
      <EffectComposer>
        <Bloom
          intensity={0.75}
          luminanceThreshold={0.32}
          luminanceSmoothing={0.2}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}
