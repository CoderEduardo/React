import React, { useState } from "react";

function Contador(props) {

    const [count, setCount] = useState(props.count)

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
        </>
    )
}

export default Contador