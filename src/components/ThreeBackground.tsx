import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Mesh, BufferGeometry, Material, Vector3 } from 'three';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

interface ParticleProps {
  position: [number, number, number];
  color: string;
  size?: number;
}

const Particle: React.FC<ParticleProps> = ({ position, color, size = 0.1 }) => {
  const mesh = useRef<Mesh<BufferGeometry, Material>>(null);
  const speed = useRef(Math.random() * 0.01 + 0.005);
  const direction = useRef(new Vector3(
    (Math.random() - 0.5) * 0.01,
    (Math.random() - 0.5) * 0.01,
    (Math.random() - 0.5) * 0.01
  ));

  useFrame(() => {
    if (mesh.current) {
      mesh.current.position.x += direction.current.x;
      mesh.current.position.y += direction.current.y;
      mesh.current.position.z += direction.current.z;

      // Boundary check and bounce
      if (Math.abs(mesh.current.position.x) > 10) direction.current.x *= -1;
      if (Math.abs(mesh.current.position.y) > 10) direction.current.y *= -1;
      if (Math.abs(mesh.current.position.z) > 10) direction.current.z *= -1;

      // Rotation
      mesh.current.rotation.x += speed.current;
      mesh.current.rotation.y += speed.current * 0.5;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <dodecahedronGeometry args={[size, 0]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} toneMapped={false} />
    </mesh>
  );
};

const ParticleField: React.FC = () => {
  const { camera } = useThree();
  const particles = useRef<ParticleProps[]>([]);
  const group = useRef<THREE.Group>(null);

  // Generate particles
  useEffect(() => {
    particles.current = Array.from({ length: 100 }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ] as [number, number, number],
      color: `hsl(${Math.random() * 60 + 200}, 100%, ${Math.random() * 50 + 50}%)`,
      size: Math.random() * 0.2 + 0.05
    }));
  }, []);

  // Camera movement
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.2;
    camera.position.x = Math.sin(t) * 15;
    camera.position.z = Math.cos(t) * 15;
    camera.position.y = Math.sin(t * 0.5) * 5;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      {particles.current.map((particle, i) => (
        <Particle key={i} {...particle} />
      ))}
    </group>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <ParticleField />
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} />
          <Noise opacity={0.05} blendFunction={BlendFunction.OVERLAY} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;