import React from "react";
import { Link } from "react-router-dom";

export default function RotaInexistente(){
    return(
        <div>
            <h1>Essa rota não existe</h1>
            <Link to="/">Voltar para a página inicial</Link>
        </div>
    )
}