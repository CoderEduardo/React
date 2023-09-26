import React from "react";
import { Link } from "react-router-dom";

export  default function Home(){
    return(
        <div>
            <h1>PÁGINA HOME</h1>
            <Link to="/sobre" className="link">Página Sobre</Link>
        </div>
    )
}