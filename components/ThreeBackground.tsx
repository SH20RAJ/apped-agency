"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from "next-themes";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!canvasRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    // Responsive canvas
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.06,
      color: theme === 'dark' ? '#ffffff' : '#000000',
      transparent: true,
      opacity: theme === 'dark' ? 1 : 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      alphaTest: 0.001,
      map: createStarTexture(),
    });

    // Create star texture function
    function createStarTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      
      const context = canvas.getContext('2d');
      if (!context) return null;

      const gradient = context.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0.15, 'rgba(255, 220, 220, 0.8)');
      gradient.addColorStop(0.25, 'rgba(255, 255, 255, 0.5)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      context.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(canvas.width / 2, 0);
      context.lineTo(canvas.width / 2, canvas.height);
      context.moveTo(0, canvas.height / 2);
      context.lineTo(canvas.width, canvas.height / 2);
      context.stroke();
      
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    }

    // Add stronger lights in dark mode
    if (theme === 'dark') {
      const pointLight = new THREE.PointLight(0xffffff, 2);
      pointLight.position.set(0, 0, 2);
      scene.add(pointLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);
    }

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Camera position
    camera.position.z = 2;

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.001;

      // Mouse follow effect
      particlesMesh.rotation.x += mouseY * 0.01;
      particlesMesh.rotation.y += mouseX * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-10"
    />
  );
} 