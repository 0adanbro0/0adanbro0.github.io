import React, { useEffect, useRef } from 'react';
import functionPlot from 'function-plot';

interface PhysicsGraphProps {
  Radius: number;
}

const PhysicsGraph: React.FC<PhysicsGraphProps> = ({ Radius }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGraph = () => {
      if (!containerRef.current) return;

      // Очищаем и берем текущую ширину родительского контейнера
      containerRef.current.innerHTML = '';
      const parentWidth = containerRef.current.offsetWidth;
      
      // Вычисляем ширину: берем ширину контейнера, но не больше 600px
      const width = parentWidth > 600 ? 600 : parentWidth - 20; 
      const height = width * 0.7; // Сохраняем пропорции

      const currentEquation = `(165 * ${Math.pow(Radius, 4)}) / (x^4)`;
      const maxF = (165 * Math.pow(Radius, 4)) / Math.pow(0.045, 4);

      try {
        functionPlot({
          target: containerRef.current,
          width: width,
          height: height,
          grid: true,
          disableZoom: true,
          xAxis: {
            label: 'L, м',
            domain: [0.03, 0.12],
          },
          yAxis: {
            label: 'F, Н',
            domain: [-0.05, Math.max(maxF * 1.2, 0.5)],
          },
          data: [
            {
              fn: currentEquation,
              color: '#0066cc',
            },
            {
              points: [
                [0.045, 0.402],
                [0.1, 0.017],
              ],
              fnType: 'points',
              graphType: 'scatter',
              color: 'red',
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    };

    updateGraph();
    
    // Добавляем слушатель, чтобы график перерисовывался при повороте телефона
    window.addEventListener('resize', updateGraph);
    return () => window.removeEventListener('resize', updateGraph);

  }, [Radius]);

  return (
    <div
      ref={containerRef} 
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }} 
    />
  );
};

export default PhysicsGraph;