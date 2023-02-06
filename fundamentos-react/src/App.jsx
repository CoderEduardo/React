import React from "react";

import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#10 - Comunicação Indireta" color="#4f2cb4">
                <IndiretaPai/>
            </Card>

            <Card titulo="#9 - Comunicação Direta" color ="#718310">
                <DiretaPai/>
            </Card>

            <Card titulo="#8 - Renderização Condicional" color="#2b007d">
                <ParOuImpar numero={20}/>
                <UsuarioInfo usuario={{nome:'Fernando'}}/>
                <UsuarioInfo/>
            </Card>

            <Card titulo="#7 - Lista de Produtos" color="#00ffff">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#6 - Lista de Alunos" color="pink">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#5 - Componente com Filhos" color="gray">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Luis" />
                    <FamiliaMembro nome="Maria" />
                    <FamiliaMembro nome="José" />
                </Familia>
            </Card>


            <Card titulo="#4 - Desafio Aleátorio" color="green">
                <Aleatorio min="0" max="100" />
            </Card>

            <Card titulo="#3 - Fragmento React" color="yellow">
                <Fragmento />
            </Card>

            <Card titulo="#2 - Situação do Aluno" color="purple">
                <ComParametro titulo="Situação Aluno" aluno="Pedro" nota={6} />
                <ComParametro titulo="Situação Aluno" aluno="Maria" nota={9.7} />
            </Card>

            <Card titulo="#1 - Primeiro Componente" color="orange">
                <Primeiro />
            </Card>

        </div>

    </div>

