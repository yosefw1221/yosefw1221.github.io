import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);
  const particleCount = 50;
  const colors = ['#3b82f6', '#ffffff', '#1e40af'];
  const lastMouseMoveTime = useRef(0);

  // Wait until component is mounted to run client-side code
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Throttle mouse move handler
  const throttleMouseMove = useCallback((callback: (e: MouseEvent) => void, delay: number) => {
    return (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseMoveTime.current >= delay) {
        callback(e);
        lastMouseMoveTime.current = now;
      }
    };
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const particles: Particle[] = [];
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize particles with deterministic values
    const initParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        const seed = i / particleCount;
        particles.push({
          x: seed * canvas.width,
          y: (seed * 7) % 1 * canvas.height,
          size: (seed * 3) % 2 + 1,
          speedX: ((i % 2 ? 1 : -1) * (0.3 + (seed * 0.4))) * 0.4,
          speedY: ((i % 3 ? 1 : -1) * (0.2 + (seed * 0.3))) * 0.4,
          opacity: 0.2 + (seed * 0.5)
        });
      }
    };

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        const colorIndex = i % colors.length;
        ctx.fillStyle = colors[colorIndex];
        ctx.globalAlpha = p.opacity;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect particles with lines if they're close enough
        for (let j = i + 3; j < particles.length; j += 3) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distanceSquared = dx * dx + dy * dy;
          
          if (distanceSquared < 10000) {
            ctx.beginPath();
            ctx.strokeStyle = colors[colorIndex];
            ctx.globalAlpha = (10000 - distanceSquared) / 80000;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    // Update particle positions
    const updateParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around edges (more efficient than bounce logic)
        if (p.x > canvas.width) {
          p.x = 0;
        } else if (p.x < 0) {
          p.x = canvas.width;
        }
        
        if (p.y > canvas.height) {
          p.y = 0;
        } else if (p.y < 0) {
          p.y = canvas.height;
        }
      }
    };

    // Animation loop
    const animate = () => {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animate);
    };
    
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      for (let i = 0; i < particles.length; i += 3) {
        const p = particles[i];
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distanceSquared = dx * dx + dy * dy;
        
        if (distanceSquared < 10000) {
          // Push particles away from mouse
          const angle = Math.atan2(dy, dx);
          const force = (100 - Math.sqrt(distanceSquared)) / 500;
          p.speedX -= Math.cos(angle) * force;
          p.speedY -= Math.sin(angle) * force;
        }
      }
    };

    setCanvasSize();
    initParticles();
    animate();
    
    // Use a throttled version of the mouse handler to reduce CPU load
    const throttledMouseMove = throttleMouseMove(handleMouseMove, 30);
    
    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousemove', throttledMouseMove);
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, [isClient, throttleMouseMove]);

  // Return null during SSR, canvas element after mounting
  if (!isClient) {
    return null;
  }

  return (
    <motion.canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1.5 }}
    />
  );
};

export default ParticleBackground; 