import React from 'react';
import 'katex/dist/katex.min.css';
import Graphic from './UI/Graphic';
import Input from './UI/Input';
import { useState } from 'react';

const App: React.FC = () => {
  const [radiusMetreParamGrath, setRadiusMetreParamGrath] = useState<number>(0.01)

  function TargetInput(event:any){
    if(event.target.value > 0.001){
      const newRadius:number = event.target.value
      setRadiusMetreParamGrath(newRadius)
    }
  }

  return (
    <>
    <Graphic radius={radiusMetreParamGrath}></Graphic>

    <div>
      <h1>
        введите радиус магнита в метрах, по умолчанию стоит 0.01м
      </h1>

      <Input func={TargetInput}></Input>
    </div>
    </>
  );
};

export default App;