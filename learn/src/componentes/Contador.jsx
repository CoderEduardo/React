import React, { useEffect, useState } from "react";

function Contador(props) {

    /*Sempre o primeiro valor de uma variável atribuida ao useState, será referente ao valor atual, e o segundo valor sempre será referente a um método
    de atualização do primeiro estado*/

    let [count,setCount] = useState(props.count)

    useEffect(()=>{
            localStorage.getItem("count")
    },[])

    useEffect(()=>{
        document.title = count
        localStorage.setItem("count",count)
    },[count])

    function incrementar(){
        setCount(count + 1)
    }

    function decrementar(){
        setCount(count-1)
    }
    
    return(
        <div>
            <h1>Contador:{count}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default Contador