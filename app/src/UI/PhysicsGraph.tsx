import React, { useEffect, useRef } from 'react';
import functionPlot from 'function-plot';


interface PhysicsGraphProps {
  Radius?: number;
  equation?: string;
}

const PhysicsGraph: React.FC<PhysicsGraphProps> = ({Radius = 0.01, equation = `(165 * ${Math.pow(Radius, 4)}) / (x^4)` }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const maxF = (165 * Math.pow(Radius, 4)) / Math.pow(0.045, 4)
  const minDistance = Radius * 2

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      functionPlot({
        target: containerRef.current,
        width: 600,
        height: 400,
        grid: true,
        xAxis: {
          label: 'L, м',
          domain: [minDistance, minDistance + 0.05],
        },
        yAxis: {
          label: 'F, Н',
          domain: [-0.1, maxF * 1.2],
        },
        data: [
          {
            fn: equation,
            color: '#0000ff',
            range: [0.038, 0.1],
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
      console.error('Ошибка рендеринга графика:', error);
    }
  }, [equation]);

  return (
    <div
      ref={containerRef} 
      style={{background: 'white', padding: '10px', display: 'inline-block' }} 
    />
  );
};

export default PhysicsGraph;