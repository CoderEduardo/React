import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


ReactDOM.render(
   <>
     <Primeiro/>
     <ComParametro titulo="Situação Aluno" aluno="Pedro" nota={6}/>
     <ComParametro titulo="Situação Aluno" aluno="Maria" nota={9.7}/>
     <Fragmento></Fragmento>
   </> ,
    document.getElementById("root")
)