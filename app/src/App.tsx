import React from 'react';
import 'katex/dist/katex.min.css';
import Graphic from './UI/Graphic';
import Input from './UI/Input';
import { useState } from 'react';

const App: React.FC = () => {
  const [radiusMetreParamGrath, setRadiusMetreParamGrath] = useState<number>(0.01)

  function TargetInput(event: React.ChangeEvent<HTMLInputElement>){
    const value:number  = Number(event.target.value)
    if(value > 0.001){
      const newRadius:number = value
      setRadiusMetreParamGrath(newRadius)
    }
  }

  return (
    <>
    <div style={{ width: '100vw', height:'100%', borderTop: '5px solid #4A4A4A', borderBottom: '5px solid #4A4A4A'}}>
      <div style={{margin: '10px'}}>
        <Graphic radius={radiusMetreParamGrath}></Graphic>

        <div>
          <h1>
            введите радиус магнита в метрах, по умолчанию стоит 0.01м
          </h1>

          <Input func={TargetInput}></Input>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;