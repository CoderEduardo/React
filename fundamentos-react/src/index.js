import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'


ReactDOM.render(
   <div>
     <Primeiro/>
     <ComParametro titulo="Situação Aluno" aluno="Pedro" nota={6}/>
     <ComParametro titulo="Situação Aluno" aluno="Maria" nota={9.7}/>
   </div> ,
    document.getElementById("root")
)