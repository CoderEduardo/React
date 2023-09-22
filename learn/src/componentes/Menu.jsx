import React from "react"

function Menu(props) {
    return (
        <ul className="lista">
            {props.links.map((link)=>{
                return(
                    <li key={link}>{link}</li>
                )
            })}
        </ul>
    )
}

export default Menu