import React, { useState, createContext } from "react";

export const ContadorContexto = createContext()

export function ContadorProvider(props){

    const [count, setCount] = useState(0)

    return(
        <ContadorContexto.Provider value={[count,setCount]}>
            {props.children}
        </ContadorContexto.Provider>
    )
}