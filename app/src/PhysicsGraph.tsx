import React, { useEffect, useRef } from 'react';
import functionPlot from 'function-plot';


interface PhysicsGraphProps {
  equation?: string;
}

const PhysicsGraph: React.FC<PhysicsGraphProps> = ({ equation = '0.00000165 / (x^4)' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

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
          domain: [0.03, 0.11],
        },
        yAxis: {
          label: 'F, Н',
          domain: [-0.1, 1.1],
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