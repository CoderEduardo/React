import React from "react";
import { useSelector } from "react-redux";

function Contador(props) {

    const contador = useSelector(state=>{
        return state
    })

    return (
        <div>
            <div>{contador}</div>
            <button onClick={()=>{}}>-</button>
            <button onClick={()=>{}}>+</button>
        </div>
    )
}

export default Contador 