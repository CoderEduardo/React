import React from "react";
import data from '../data'

export default function Aulas(props){
    return(
        <div className="page">
            <ul className="aulas">
                {data.map(aula =>
                    <li key={aula.id}>{aula.title}</li>
                )}
            </ul>
        </div>
    )
}