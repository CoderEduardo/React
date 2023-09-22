import React from "react";
import { useState } from "react";

function Form() {

    const [texto, setTexto] = useState("")
    const [itens, setItens] = useState([])

    function escrever(evento) {
        let conteudo = evento.target.value
        setTexto(conteudo)
    }

    function adicionarItem(evento) {
        evento.preventDefault()
        if (texto) {
            setItens([...itens, texto])
            setTexto("")
        }
    }

    return (
        <>
            <form>
                <input type="text" onChange={escrever} value={texto} />
                <button onClick={adicionarItem}>Add</button>
            </form>

            <ul>
                {itens.map(iten => <li>{iten}</li>)}
            </ul>
        </>

    )
}

export default Form