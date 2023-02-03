import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";

export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio min="0" max="100"/>
        <Fragmento></Fragmento>
        <ComParametro titulo="Situação Aluno" aluno="Pedro" nota={6} />
        <ComParametro titulo="Situação Aluno" aluno="Maria" nota={9.7} />
        <Primeiro />
    </div>

