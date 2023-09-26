import React from 'react'
import Routes from './routes/routes';
import Nav from './components/Nav';
import './style.css'

function App() {
  return (
     <div>
        <Nav/>
        <Routes></Routes>
     </div>
  );
}

export default App;
