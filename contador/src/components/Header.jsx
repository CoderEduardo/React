import React, { useContext } from "react";
import "../style.css"
import { ContadorContexto } from "../ContadorContext";

function Header(){
    
    const [count,setCount] = useContext(ContadorContexto)

    return(
        <header>
            <h1>Contador</h1>
            <h3>{count}</h3>
        </header>
    )
}

export default Header