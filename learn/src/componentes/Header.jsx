import React from "react";
import '../App.css'
import Menu from "./Menu";

function Header(props) {
    return (
        <header className="header">
            <h2>{props.name}</h2>
            <Menu links={props.links}></Menu>
        </header>
    )
}

export default Header