import React from "react";
import Contador from "./components/Contador";
import Header from "./components/Header";
import { ContadorProvider } from "./ContadorContext";

function App() {
    return (
        <>
            <ContadorProvider>
                <Header></Header>
                <Contador></Contador>
            </ContadorProvider>
        </>
    )
}

export default App