import React from "react";
import { useState } from "react";

function Form() {

    const [texto, setTexto] = useState("")

    function escrever(evento){
        let conteudo = evento.target.value 
        setTexto(conteudo)
    }   

    return (
        <>
            <form>
                <input type="text" onChange={escrever} />
            </form>
            <ul>
                <li>{texto}</li>
            </ul>
        </>

    )
}

export default Form