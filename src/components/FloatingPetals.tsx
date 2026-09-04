import React, { useEffect, useRef } from 'react';

export const FloatingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotSpeed: number;
      opacity: number;
      type: 'petal' | 'goldSparkle';
      color: string;
    }

    const particles: Particle[] = [];
    const count = window.innerWidth < 768 ? 16 : 28;

    for (let i = 0; i < count; i++) {
      const isGold = Math.random() > 0.65;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isGold ? Math.random() * 2.5 + 1 : Math.random() * 8 + 6,
        speedY: isGold ? Math.random() * 0.4 + 0.15 : Math.random() * 0.6 + 0.3,
        speedX: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        opacity: isGold ? Math.random() * 0.6 + 0.3 : Math.random() * 0.35 + 0.2,
        type: isGold ? 'goldSparkle' : 'petal',
        color: isGold
          ? 'rgba(230, 200, 117, '
          : Math.random() > 0.4
          ? 'rgba(40, 75, 145, '
          : 'rgba(90, 130, 200, ',
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.005) * 0.3;
        p.rotation += p.rotSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'petal') {
          // Draw romantic rose petal curved shape
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.fill();

          // Subtle gold shimmer rim on petal edge
          ctx.strokeStyle = `rgba(212, 175, 55, ${p.opacity * 0.25})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        } else {
          // Draw tiny glistening gold star/sparkle
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.shadowColor = '#D4AF37';
          ctx.shadowBlur = 6;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="floating-petals-canvas"
      className="pointer-events-none fixed inset-0 z-20 h-full w-full opacity-70"
    />
  );
};
