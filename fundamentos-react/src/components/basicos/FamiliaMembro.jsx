import React from "react";

export default props => {

    const CorFonte = {
        color: props.CorFonte || 'black'
    }


    return (
        <div style={CorFonte}>{props.nome} <strong>{props.sobrenome}</strong></div>
    )
}