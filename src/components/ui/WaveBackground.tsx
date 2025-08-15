import React, { useRef, useEffect } from 'react';

const WaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const points: Array<{ x: number; y: number; z: number; originalX: number; originalY: number }> = [];
    const gridSize = 40;
    const amplitude = 30;
    const frequency = 0.02;

    // Create grid of points
    for (let x = 0; x < canvas.width; x += gridSize) {
      for (let y = 0; y < canvas.height; y += gridSize) {
        points.push({
          x,
          y,
          z: 0,
          originalX: x,
          originalY: y
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;

      // Update point positions with wave motion
      points.forEach(point => {
        const distance = Math.sqrt(
          Math.pow(point.originalX - canvas.width / 2, 2) + 
          Math.pow(point.originalY - canvas.height / 2, 2)
        );
        
        point.z = Math.sin(distance * frequency + time) * amplitude;
        
        // Create 3D perspective effect
        const perspective = 1000;
        const scale = perspective / (perspective + point.z);
        
        point.x = point.originalX * scale + (canvas.width / 2) * (1 - scale);
        point.y = point.originalY * scale + (canvas.height / 2) * (1 - scale);
      });

      // Draw connections between nearby points
      ctx.strokeStyle = 'rgba(100, 100, 100, 0.1)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < points.length; i++) {
        const point1 = points[i];
        
        for (let j = i + 1; j < points.length; j++) {
          const point2 = points[j];
          const distance = Math.sqrt(
            Math.pow(point1.x - point2.x, 2) + 
            Math.pow(point1.y - point2.y, 2)
          );
          
          if (distance < gridSize * 1.5) {
            const opacity = Math.max(0, 1 - distance / (gridSize * 1.5));
            ctx.strokeStyle = `rgba(100, 100, 100, ${opacity * 0.1})`;
            
            ctx.beginPath();
            ctx.moveTo(point1.x, point1.y);
            ctx.lineTo(point2.x, point2.y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      points.forEach(point => {
        const size = Math.max(0.5, 2 + point.z * 0.02);
        const opacity = Math.max(0.1, 0.3 + point.z * 0.01);
        
        ctx.fillStyle = `rgba(150, 150, 150, ${opacity})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default WaveBackground;