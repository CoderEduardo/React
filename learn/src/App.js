import './App.css';
import Contador from './componentes/Contador';
import Header from './componentes/Header';

function App() {
  return (
    <>
      <Header name="Luis Eduardo" links={['Sobre', 'Comprar', 'Contato', 'Login']}></Header>
      <Contador contador={1}></Contador>
    </>
  );
}

export default App;
