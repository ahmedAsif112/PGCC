"use client";

import React, { useRef, useMemo, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// --- ROTATING RING COMPONENT ---
const ConnectionRing = ({
  radius,
  speed,
  rotation,
  color = "#FFD700",
}: {
  radius: number;
  speed: number;
  rotation: [number, number, number];
  color?: string;
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += speed * delta * 0.5;
      ref.current.rotation.x += speed * delta * 0.25;
    }
  });

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, 0.005, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

// --- EARTH COMPONENT ---
const Earth = () => {
  const earthRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  const [lightsMap, cloudsMap] = useLoader(THREE.TextureLoader, [
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png",
  ]);

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.08;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.09;
    }
  });

  return (
    <group ref={earthRef} scale={[0.9, 0.9, 0.9]}>
      {/* 1. SOLID BLACK OCEAN SPHERE */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color="#020617" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* 2. GLOWING GOLD LANDMASSES */}
      <mesh>
        <sphereGeometry args={[2.01, 64, 64]} />
        <meshStandardMaterial
          map={lightsMap}
          transparent={true}
          opacity={1}
          color="#fbbf24"
          emissive="#d97706"
          emissiveMap={lightsMap}
          emissiveIntensity={2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 3. NETWORK WIREFRAME MESH */}
      <mesh>
        <sphereGeometry args={[2.03, 32, 32]} />
        <meshBasicMaterial
          color="#b45309"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* 4. CLOUDS / ATMOSPHERE */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.05, 64, 64]} />
        <meshStandardMaterial
          map={cloudsMap}
          alphaMap={cloudsMap}
          transparent={true}
          opacity={0.1}
          color="#ffffff"
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

// --- FLOATING PARTICLES ---
const Particles = ({ count = 300 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp: any[] = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = (particle.t += speed / 2);
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      dummy.position.set(
        (particle.mx / 10) * a +
        xFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
        yFactor +
        Math.sin((t / 10) * factor) +
        (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
        zFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.03, 0]} />
      <meshBasicMaterial
        color="#fbbf24"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
};

// --- MAIN SCENE ---
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[-10, 5, -10]} intensity={2} color="#f59e0b" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />

      {/* ✅ OPTIMIZED: Reduced from 4000 to 1500 stars */}
      <Stars
        radius={120}
        depth={80}
        count={1500}
        factor={3}
        saturation={0}
        fade
        speed={0}
        color="white"
      />

      <Suspense fallback={null}>
        <Earth />
      </Suspense>

      <Particles />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.8}
        enableDamping
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
};

// --- EXPORTED COMPONENT WITH INTERSECTION OBSERVER ---
const GoldGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // ✅ Pause rendering when component is off-screen
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0, // Trigger as soon as any part leaves/enters viewport
        rootMargin: "100px", // Start/stop slightly before entering/leaving for smoother UX
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        mt-5
        pointer-events-none
        absolute inset-y-0 right-0
        w-[90vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw]
        flex items-center justify-center
        z-0
      "
      style={{ touchAction: 'pan-y' }}
    >
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 8], fov: 35 }}
        dpr={[1, 1.5]} // ✅ OPTIMIZED: Clamped from [1, 2] to [1, 1.5] for better performance
        performance={{ min: 0.5 }}
        gl={{ antialias: true, alpha: true }}
        frameloop={isVisible ? "always" : "never"} // ✅ CRITICAL: Pause rendering when off-screen
        style={{ pointerEvents: 'none' }} // ✅ FIX: Prevent Canvas from blocking scroll on mobile
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default GoldGlobe;