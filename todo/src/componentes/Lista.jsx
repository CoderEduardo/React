import React from "react";

function Lista(props) {
    return (
        <ul>
            {props.itens.map(iten => <li>{iten}</li>)}
        </ul>
    )
}

export default Lista