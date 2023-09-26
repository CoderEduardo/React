import React from 'react'
import Home from '../components/Home';
import Sobre from '../components/Sobre';
import Artigos from '../components/Artigos';
import RotaInexistente from '../components/RotaInexistente';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function routes() {
    return (
        <div>
                <BrowserRouter>
                    <Routes>
                        <Route component={Home} path="/" element={<Home />} />
                        <Route component={Sobre} path="/sobre" element={<Sobre />} />
                        <Route component={Artigos} path="/artigos" element={<Artigos />} />
                        <Route component={RotaInexistente} path='*' element={<RotaInexistente/>}></Route>
                    </Routes>
                </BrowserRouter>
        </div>
    );
}

export default routes;
