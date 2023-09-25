import React from 'react'
import Home from './componentes/Home';
import Aulas from './componentes/Aula';
import Sobre from './componentes/Sobre';
import Nav from './componentes/Nav';

function App() {
    return(
      <div>
        <Nav></Nav>
        <Home></Home>
        <Aulas></Aulas>
        <Sobre></Sobre>
      </div>
    )
}

export default App;
