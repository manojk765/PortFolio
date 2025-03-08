
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

interface Scene3DProps {
  className?: string;
  density?: number;
}

export function Scene3D({ className = "", density = 50 }: Scene3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup scene
    const scene = new THREE.Scene();
    
    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = density;
    const posArray = new Float32Array(particlesCnt * 3);
    
    // Fill positions array with random values
    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    
    // Create material based on theme
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: theme === "dark" ? 0x9b87f5 : 0x7209B7,
      transparent: true,
      opacity: 0.8,
    });
    
    // Create the particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = elapsedTime * 0.03;
      
      // Render scene
      renderer.render(scene, camera);
      
      // Request next frame
      window.requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };
    
    window.addEventListener("resize", handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [density, theme]);
  
  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
}

export default Scene3D;
