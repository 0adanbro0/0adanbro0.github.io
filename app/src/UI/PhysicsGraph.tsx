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

      containerRef.current.innerHTML = '';

      const screenWidth = window.innerWidth;
      const isMobile = screenWidth < 600;

      const width = isMobile ? screenWidth - 20 : (screenWidth > 800 ? 600 : screenWidth - 100);
      
      const height = isMobile ? width * 1.3 : width * 0.7;

      const currentEquation = `(165 * ${Math.pow(Radius, 4)}) / (x^4)`;
      const maxF = (165 * Math.pow(Radius, 4)) / Math.pow(0.045, 4);

      try {
        (functionPlot as any)({
          target: containerRef.current,
          width: width,
          height: height,
          grid: true,
          disableZoom: true,
          
          margin: { top: 40, right: 30, bottom: 60, left: 80 },

          xAxis: {
            label: 'L, м',
            domain: [0.03, 0.12],
          },
          yAxis: {
            label: 'F, Н',
            domain: [-0.05, Math.max(maxF * 1.4, 0.6)],
          },
          data: [
            {
              fn: currentEquation,
              color: '#0066cc',
              attr: { 
                "stroke-width": isMobile ? 5 : 2.5
              }
            },
            {
              points: [
                [0.045, 0.402],
                [0.1, 0.017],
              ],
              fnType: 'points',
              graphType: 'scatter',
              color: '#ff0000',
              attr: { 
                r: isMobile ? 8 : 4
              }
            },
          ],
        });

        const svg = containerRef.current.querySelector('svg');
        if (svg) {
            svg.style.overflow = 'visible';
            const textElements = svg.querySelectorAll('text');
            textElements.forEach((t: any) => {
                t.style.fontSize = isMobile ? '16px' : '14px';
                t.style.fontWeight = isMobile ? 'bold' : 'normal';
                t.style.fontFamily = 'sans-serif';
            });
        }

      } catch (error) {
        console.error('Ошибка рендеринга графика:', error);
      }
    };

    // Первый запуск
    updateGraph();

    window.addEventListener('resize', updateGraph);
    return () => window.removeEventListener('resize', updateGraph);

  }, [Radius]);

  return (
  <div
    ref={containerRef} 
    className="physics-graph-wrapper"
    style={{ 
      background: 'transparent',
      display: 'flex', 
      justifyContent: 'center',
      width: '100%'
    }} 
  />
);
};

export default PhysicsGraph;