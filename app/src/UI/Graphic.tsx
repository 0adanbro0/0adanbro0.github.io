import Latex from 'react-latex-next';
import PhysicsGraph from './PhysicsGraph';

interface GraphicProps {
    radius?: number;
}

const Graphic: React.FC<GraphicProps> = ({radius = 0.01}) =>{
    return(
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Физический эксперимент</h1>
      
      <div style={{ marginBottom: '20px', fontSize: '1.2rem' }}>
        <Latex>{String.raw`График зависимости $F(L) = \frac{k}{L^4}$`}</Latex>
      </div>

      <PhysicsGraph Radius={radius}/>

      <div style={{ marginTop: '10px', color: '#666' }}>
        <p><Latex>Точка 1: $L = 0.045, F \approx 0.402$</Latex></p>
        <p><Latex>Точка 2: $L = 0.1, F \approx 0.017$</Latex></p>
      </div>
    </div>
    )
}

export default Graphic;