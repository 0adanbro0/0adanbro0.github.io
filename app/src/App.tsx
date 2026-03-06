import React from 'react';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import Graphic from './UI/Graphic';
import Input from './UI/Input';
import { useState } from 'react';

import './../css/app.css'

const App: React.FC = () => {
  const [radiusMetreParamGrath, setRadiusMetreParamGrath] = useState<number>(0.01)
  const [radiusMetreParamFormula, setRadiusMetreParamFormula] = useState<number>(0)
  const [distanceMetreParamFormula, setDistanceMetreParamFormula] = useState<number>(0)

   const resultFormula = ()=>{
    if(radiusMetreParamFormula > 100000 || distanceMetreParamFormula > 100000){
      return ((165 * Math.pow(radiusMetreParamFormula, 4)) / Math.pow(distanceMetreParamFormula, 4)).toExponential(2)
    }
    else if(radiusMetreParamFormula > 0 && distanceMetreParamFormula > 0){
      return ((165 * Math.pow(radiusMetreParamFormula, 4)) / Math.pow(distanceMetreParamFormula, 4)).toFixed(4)
    }
    else{
      return 0
    }
   }

  function CountFormula(event: React.ChangeEvent<HTMLInputElement>){
    const value:number  = Number(event.target.value)
    switch(event.target.name){
      case 'distance':
        const newDistance:number = value
        console.log(newDistance)
        setDistanceMetreParamFormula(newDistance)
      break;
      case 'radius':
        const newRadius:number = value
        console.log(newRadius)
        setRadiusMetreParamFormula(newRadius)   
      break
    }
  }

  function TargetInput(event: React.ChangeEvent<HTMLInputElement>){
    const value:number  = Number(event.target.value)
    if(value > 0.001){
      const newRadius:number = value
      setRadiusMetreParamGrath(newRadius)
    }
  }

  return (
    <>
    <div className="graphic-card">
      <div className="graphic-wrapper">
        <Graphic radius={radiusMetreParamGrath} />
      </div>

      <div className="graphic-controls">
        <h1 className="graphic-title">
          Введите радиус магнита для визуализации (м):
        </h1>
        
        <Input 
          func={TargetInput} 
          nameInp="radiusGrath" 
        />
        
        <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '10px' }}>
          По умолчанию: 0.01м. График перестраивается автоматически.
        </p>
      </div>
    </div>

    <div className="calculator-card">
      <h1 className="calculator-title">Калькулятор силы взаимодействия</h1>
      
      <div className="formula-info"> 
        <p className='formula'>
          <Latex>{`$F_{\\text{взаимодействия}} = \\frac{3 \\mu_0 m^2}{2 L^4 \\pi}$, Где $m = \\frac{ B_{\\text{ост}} V}{\\mu_0}$`}</Latex>
        </p>
        <p className='formula'>
          <Latex>{`$F_{\\text{взаимодействия}} = \\frac{3 B_{\\text{ост}}^2 \\pi R^4 h^2}{2 L^4 \\mu_0}$`}</Latex>
        </p>
      </div>

      <div className="interactive-content">
        <h1>Введите расстояние между магнитами (L), м:</h1>
        <Input func={CountFormula} nameInp="distance"/>

        <h1>Введите радиус магнита (R), м:</h1>
        <Input func={CountFormula} nameInp="radius"/>
      </div>

      <div className="result-content">
        <h1>
          <Latex>{`$F_{\\text{взаимодействия}} = ${resultFormula()} Н$`}</Latex>
        </h1>
      </div>
    </div>
    </>
  );
};

export default App;