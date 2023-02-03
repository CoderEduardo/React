import React from "react";

//Se mais de um conteúdo não for envolvido dentro do React.Fragment ele apresentará um erro. Podemos usar também <></>, ou até mesmo use uma div normal

export default () => {
    return (
        <React.Fragment>
            <h2>React Fragmento</h2>
            <p>Cuidado com o ERRO</p>
        </React.Fragment>
    )
}