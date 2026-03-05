import React from 'react';
import Latex from 'react-latex-next';
import PhysicsGraph from './PhysicsGraph';
import '../../css/graphicUI.css'

interface GraphicProps {
    radius?: number;
}

const Graphic: React.FC<GraphicProps> = ({ radius = 0.01 }) => {
    return (
        <div className="graphic-container">
            <h1 className="graphic-main-title">Интерактивная модель эксперимента</h1>
            
            <div className="formula-display">
                <Latex>{String.raw`График зависимости $F(L) = \frac{kR^4}{L^4}$, при $R = ${radius}$ м`}</Latex>
            </div>

            <PhysicsGraph Radius={radius} />


            <div className="graph-legend">
                <div className="legend-item">
                    <Latex>{String.raw`Экспериментальная точка 1: $L = 0.045, F \approx 0.402$ Н`}</Latex>
                </div>
                <div className="legend-item">
                    <Latex>{String.raw`Экспериментальная точка 2: $L = 0.1, F \approx 0.017$ Н`}</Latex>
                </div>
                <p className="graph-note">* Синяя линия — теоретический расчет, точки — замеры в колыбели</p>
            </div>
        </div>
    );
}

export default Graphic;