import React, { useEffect, useRef } from 'react';

/**
 * High performance HTML5 Canvas effect rendering slow, organic drifting rose petals
 * and shimmering gold foil dust particles with multi-plane subtle PARALLAX physics.
 * Floral elements at varying depths move differently than the background when transitioning between slides.
 */
export const PetalCanvas: React.FC<{
  active?: boolean;
  intensity?: 'gentle' | 'celebratory';
  page?: number;
  direction?: 'forward' | 'backward';
}> = ({
  active = true,
  intensity = 'gentle',
  page = 0,
  direction = 'forward'
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pageRef = useRef(page);
  const directionRef = useRef(direction);
  const intensityRef = useRef(intensity);
  intensityRef.current = intensity;

  useEffect(() => {
    pageRef.current = page;
    directionRef.current = direction;
  }, [page, direction]);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number | null = null;
    const lowPowerDevice = (navigator.hardwareConcurrency || 8) <= 4 ||
      ('connection' in navigator && Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData));
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = Math.max(0, window.innerWidth);
      height = Math.max(0, window.innerHeight);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    resizeCanvas();

    const handleResize = () => {
      resizeCanvas();
      if (width === 0 || height === 0) stopAnimation();
      else if (prefersReducedMotion.matches) drawFrame();
      else startAnimation();
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const maxParticleCount = lowPowerDevice ? 36 : 48;
    
    // Parallax tracking: smoothly lerps towards page-driven target offset
    let currentParallaxY = pageRef.current * 40;
    let targetParallaxY = pageRef.current * 40;
    let transitionImpulseY = 0;
    let lastRecordedPage = pageRef.current;

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      depth: number; // 0.3 (far/background) to 1.7 (near/foreground)
      rotation: number;
      rotationSpeed: number;
      oscillation: number;
      oscillationSpeed: number;
      type: 'petal' | 'goldDust';
      opacity: number;
      color: string;
    }

    const particles: Particle[] = [];
    const petalPath = new Path2D();
    petalPath.moveTo(0, -1);
    petalPath.bezierCurveTo(0.7, -0.7, 0.9, 0.3, 0, 1);
    petalPath.bezierCurveTo(-0.9, 0.3, -0.7, -0.7, 0, -1);

    // Palette of Jaipur Palace Blush Roses, Peach Blossoms, Jasmine & Rose Gold Foil
    const petalColors = [
      'rgba(229, 142, 128, ', // Jaipur Blush Rose
      'rgba(214, 112, 96, ',  // Heritage Rose Petal
      'rgba(245, 184, 176, ', // Soft Peach Blossom
      'rgba(255, 240, 235, ', // Jasmine Cream Petal
      'rgba(235, 170, 155, '  // Warm Rose Sandstone Petal
    ];

    for (let i = 0; i < maxParticleCount; i++) {
      const isGold = Math.random() < 0.35;
      const depth = Math.random() * 1.4 + 0.3; // Depth factor for parallax
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isGold ? (Math.random() * 2.8 + 1.2) * (depth * 0.7 + 0.5) : (Math.random() * 8 + 6) * (depth * 0.6 + 0.6),
        speedY: (isGold ? Math.random() * 0.45 + 0.15 : Math.random() * 0.65 + 0.25) * depth,
        speedX: (Math.random() - 0.5) * 0.4 * depth,
        depth,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        oscillation: Math.random() * Math.PI * 2,
        oscillationSpeed: Math.random() * 0.015 + 0.005,
        type: isGold ? 'goldDust' : 'petal',
        opacity: Math.random() * 0.55 + 0.35,
        color: isGold ? 'rgba(218, 175, 75, ' : petalColors[Math.floor(Math.random() * petalColors.length)]
      });
    }

    const drawPetal = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      color: string,
      opacity: number
    ) => {
      context.save();
      context.translate(x, y);
      context.rotate(rotation);
      context.fillStyle = `${color}${opacity})`;
      context.scale(size, size);
      context.fill(petalPath);
      context.restore();
    };

    const drawGoldSparkle = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      opacity: number
    ) => {
      context.beginPath();
      context.arc(x, y, size, 0, Math.PI * 2);
      context.fillStyle = `${color}${opacity})`;
      context.fill();
    };

    const drawFrame = () => {
      if (width <= 0 || height <= 0) return;
      ctx.clearRect(0, 0, width, height);

      // Check if page transitioned to trigger dynamic parallax momentum
      if (pageRef.current !== lastRecordedPage) {
        const isForward = directionRef.current === 'forward';
        transitionImpulseY += isForward ? -6.5 : 6.5;
        targetParallaxY = pageRef.current * 35;
        lastRecordedPage = pageRef.current;
      }

      // Smoothly interpolate towards target parallax position & decay impulse
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.06;
      transitionImpulseY *= 0.92;

      const particleCount = intensityRef.current === 'celebratory'
        ? particles.length
        : Math.min(particles.length, lowPowerDevice ? 20 : 26);
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.oscillation += p.oscillationSpeed;
        p.x += p.speedX + Math.sin(p.oscillation) * 0.6;
        
        // Base fall speed + subtle parallax delta driven by depth
        const parallaxDelta = transitionImpulseY * (p.depth - 0.7);
        p.y += p.speedY + parallaxDelta;
        p.rotation += p.rotationSpeed + (transitionImpulseY * 0.002 * p.depth);

        // Effective rendered position factoring in multi-plane depth
        let renderY = p.y + (currentParallaxY * (p.depth - 1.0) * 0.4);
        renderY = ((renderY % height) + height) % height;

        if (p.type === 'petal') {
          drawPetal(ctx, p.x, renderY, p.size, p.rotation, p.color, p.opacity);
        } else {
          drawGoldSparkle(ctx, p.x, renderY, p.size, p.color, p.opacity * (0.6 + Math.sin(p.oscillation * 3) * 0.4));
        }

        // Natural screen bounds wrapping
        if (p.y > height + 40) {
          p.y = -30;
          p.x = Math.random() * width;
        } else if (p.y < -40) {
          p.y = height + 30;
          p.x = Math.random() * width;
        }
        if (p.x > width + 30) p.x = -30;
        if (p.x < -30) p.x = width + 30;
      }

    };

    const animate = () => {
      animationFrameId = null;
      drawFrame();
      if (width > 0 && height > 0 && !document.hidden && !prefersReducedMotion.matches) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const startAnimation = () => {
      if (document.hidden || prefersReducedMotion.matches || width === 0 || height === 0 || animationFrameId !== null) return;
      animationFrameId = requestAnimationFrame(animate);
    };
    const stopAnimation = () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    };
    const handleVisibilityChange = () => document.hidden ? stopAnimation() : startAnimation();
    const handleMotionPreferenceChange = () => {
      if (prefersReducedMotion.matches) {
        stopAnimation();
        drawFrame();
      } else startAnimation();
    };
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    prefersReducedMotion.addEventListener('change', handleMotionPreferenceChange);
    if (prefersReducedMotion.matches) drawFrame();
    else startAnimation();

    return () => {
      stopAnimation();
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      prefersReducedMotion.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 select-none"
      style={{ opacity: active ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
      aria-hidden="true"
    />
  );
};
