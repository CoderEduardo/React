import React from "react";
import database from '../database'

export default function Artigos(){
    return(
        <div>
            <ul>
                {database.map(artigo=>
                        <li key={artigo.id}>{artigo.title}</li>
                    )}
            </ul>
        </div>
    )
}