"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
const MOVEMENT_COEFFICIENT = 0.00005;

export default function Canvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    renderer.setClearColor(new THREE.Color("#20272b"));
    camera.position.z = 5;

    const ambientLight = new THREE.AmbientLight(0xffffff);
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight, pointLight);

    // Star-field
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );

    const material = new THREE.PointsMaterial({ size: 0.005 });
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    let mouseX = 0,
      mouseY = 0;

    const animate = () => {
      const targetX = mouseX * MOVEMENT_COEFFICIENT;
      const targetY = mouseY * MOVEMENT_COEFFICIENT;

      particlesMesh.rotation.y += 0.02 * (targetX - particlesMesh.rotation.y);
      particlesMesh.rotation.x += 0.02 * (targetY - particlesMesh.rotation.x);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 -z-50 w-full h-screen" ref={mountRef} />
  );
}
