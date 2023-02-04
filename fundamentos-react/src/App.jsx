import React from "react";

import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
        <Card titulo="#4 - Desafio Aleátorio">
            <Aleatorio min="0" max="100" />
        </Card>

        <Card titulo="#3 - Fragmento React">
            <Fragmento />
        </Card>

        <Card titulo="#2 - Situação do Aluno">
            <ComParametro titulo="Situação Aluno" aluno="Pedro" nota={6} />
            <ComParametro titulo="Situação Aluno" aluno="Maria" nota={9.7} />
        </Card>

        <Card titulo="#1 - Primeiro Componente">
            <Primeiro />
        </Card>

        </div>
        
    </div>

