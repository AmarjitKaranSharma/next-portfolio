import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

function StarField({ count = 5000 }) {
  const points = useRef<THREE.Points>(null);

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 10;

    // Add some color variation
    colors[i3] = 0.8 + Math.random() * 0.2;
    colors[i3 + 1] = 0.8 + Math.random() * 0.2;
    colors[i3 + 2] = 0.8 + Math.random() * 0.2;
  }

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <Points ref={points} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingGrid() {
  const gridRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!gridRef.current) return;
    gridRef.current.rotation.x =
      Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    gridRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={gridRef}>
      {/* Horizontal grid lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={`h-${i}`} position={[0, (i - 5) * 0.5, 0]}>
          <planeGeometry args={[10, 0.005]} />
          <meshBasicMaterial
            color="#6b21a8"
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Vertical grid lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh
          key={`v-${i}`}
          position={[(i - 5) * 0.5, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <planeGeometry args={[10, 0.005]} />
          <meshBasicMaterial
            color="#6b21a8"
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function BackgroundEffect() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <Suspense fallback={null}>
        <StarField />
        <FloatingGrid />
        <ambientLight intensity={0.5} />
      </Suspense>
    </Canvas>
  );
}
