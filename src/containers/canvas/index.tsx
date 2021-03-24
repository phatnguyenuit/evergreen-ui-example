import React, { memo, useRef, useEffect } from 'react';

export const CanvasComponent: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current) {
      const context = ref.current.getContext('2d');

      if (context) {
        // draw rectangle
        context.fillRect(0, 0, 100, 100);

        // draw circle
        context.beginPath();
        context.fillStyle = '#ff7f50';
        context.arc(250, 50, 50, 0, Math.PI * 2, true);
        context.fill();
        context.fillStyle = '#000';
        context.closePath();
      }
    }
  }, []);

  return (
    <canvas
      ref={ref}
      width={300}
      height={300}
      style={{ border: '2px solid black' }}
    />
  );
};

const Canvas = memo(CanvasComponent);
Canvas.displayName = 'Canvas';

export default Canvas;
