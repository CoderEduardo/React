import React from 'react'
import Home from './componentes/Home';
import Aulas from './componentes/Aula';
import Sobre from './componentes/Sobre';
import Nav from './componentes/Nav';

//Responsavel por gerenciar as rotas e saber o que elas vão fazer 
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/aulas'>
          <Aulas />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
      </div>
    </Router>
  )
}

export default App;
