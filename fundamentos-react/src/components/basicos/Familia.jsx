import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {

    return (
        <div>
            <FamiliaMembro nome="Luis" sobrenome={props.sobrenome} CorFonte="red" />
            <FamiliaMembro nome="Maria" {...props} CorFonte="green" />
            <FamiliaMembro nome="José" sobrenome="Silva" CorFonte="pink" />
        </div>
    )
}