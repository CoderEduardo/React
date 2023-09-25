import React from "react";
import { useSelector} from "react-redux";

function Header(props){

    const contador = useSelector(state=>{
        return state.counter
    })

    return(
        <div>
            <h3>Contador</h3>
            <div>{contador}</div>
        </div>
    )
}

export default Header