import React from "react"

function Menu(props) {
    return (
        <ul className="lista">
            {props.links.map((link,index)=>{
                return(
                    <li key={index}>{link}</li>
                )
            })}
        </ul>
    )
}

export default Menu