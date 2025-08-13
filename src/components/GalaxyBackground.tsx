import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Sparkles, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Heart-shaped asteroid component
const HeartAsteroid = ({ position, scale = 1 }: { position: [number, number, number], scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create heart shape geometry
  const heartShape = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0, y = 0;
    shape.moveTo(x + 0.5, y + 0.5);
    shape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
    shape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
    shape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9);
    shape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7);
    shape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1, y);
    shape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.2,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 2,
      bevelSize: 0.1,
      bevelThickness: 0.1,
    });

    return geometry;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.003;
      // Gentle pulsing effect
      meshRef.current.scale.setScalar(scale * (1 + Math.sin(state.clock.elapsedTime * 2) * 0.1));
    }
  });

  return (
    <mesh ref={meshRef} position={position} geometry={heartShape}>
      <meshPhongMaterial color="#ff69b4" emissive="#ff1493" emissiveIntensity={0.2} />
    </mesh>
  );
};

// Glowing planet component
const GlowingPlanet = ({ position, color, size = 0.5 }: { position: [number, number, number], color: string, size?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y -= 0.005;
      // Gentle breathing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
      glowRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={position}>
      {/* Main planet */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.1} />
      </mesh>
      {/* Glow effect */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[size * 1.3, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} />
      </mesh>
    </group>
  );
};

// Stardust particle system
const Stardust = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const { positions, colors, sizes } = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    const pastelColors = [
      new THREE.Color('#ffb3d9'), // Pastel pink
      new THREE.Color('#c9b3ff'), // Pastel lavender
      new THREE.Color('#b3d9ff'), // Pastel blue
      new THREE.Color('#ffccb3'), // Pastel peach
      new THREE.Color('#d9ffb3'), // Pastel mint
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Random positions in a sphere
      const radius = Math.random() * 50 + 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Random pastel colors
      const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      
      // Random sizes
      sizes[i] = Math.random() * 0.5 + 0.1;
    }
    
    return { positions, colors, sizes };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
      particlesRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Interactive cursor effect
const CursorEffect = () => {
  const { mouse, camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Convert mouse position to world coordinates
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      
      // Smooth follow
      groupRef.current.position.lerp(pos, 0.02);
    }
  });

  return (
    <group ref={groupRef}>
      <Sparkles count={20} scale={2} size={1} speed={0.3} color="#ff69b4" />
    </group>
  );
};

// Main galaxy scene
const GalaxyScene = () => {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} color="#e6e6fa" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff69b4" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#87ceeb" />

      {/* Background stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />

      {/* Heart-shaped asteroids */}
      <HeartAsteroid position={[-15, 8, -20]} scale={0.3} />
      <HeartAsteroid position={[20, -5, -30]} scale={0.5} />
      <HeartAsteroid position={[-8, -12, -25]} scale={0.4} />

      {/* Glowing planets */}
      <GlowingPlanet position={[25, 15, -40]} color="#ff69b4" size={1.2} />
      <GlowingPlanet position={[-30, -8, -35]} color="#87ceeb" size={0.8} />
      <GlowingPlanet position={[12, -20, -45]} color="#dda0dd" size={1.0} />

      {/* Stardust particles */}
      <Stardust />

      {/* Interactive cursor effect */}
      <CursorEffect />

      {/* Gentle orbit controls for interactivity */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        rotateSpeed={0.1}
        dampingFactor={0.05}
        enableDamping
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.5}
      />
    </>
  );
};

// Main galaxy background component
const GalaxyBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{
          background: 'linear-gradient(135deg, #1a0033 0%, #0d001a 25%, #001133 50%, #000817 75%, #000000 100%)',
        }}
      >
        <Suspense fallback={null}>
          <GalaxyScene />
        </Suspense>
      </Canvas>
      
      {/* Fallback for non-WebGL devices */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-900/20 via-indigo-900/10 to-black opacity-50" />
    </div>
  );
};

export default GalaxyBackground;