import './App.css';
import Contador from './componentes/Contador';
import Header from './componentes/Header';

function App() {
  return (
    <div>
      <Header name="Luis Eduardo" links={['Sobre', 'Comprar', 'Contato', 'Login']}></Header>
      <Contador count={1}></Contador>
    </div>
  );
}

export default App;
