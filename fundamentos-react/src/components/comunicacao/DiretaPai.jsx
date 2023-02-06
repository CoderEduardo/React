import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {

    return (
        <div>
            <DiretaFilho nome="Azevedo" idade={20} nerd={true} />
            <DiretaFilho nome="Maria Eduarda" idade={15} nerd={false} />
            <DiretaFilho nome="Ricardo" idade={50} nerd={false} />
        </div>
    )
}