import React, { useContext, useState } from "react";
import { ContadorContexto } from "../ContadorContext";

function Contador(props) {

    const [count, setCount] = useContext(ContadorContexto)

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return (
        <div className="contador"> 
            <h2>{count}</h2>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
        </div>
    )
}

export default Contador