import React from "react"


function Image (props) {
    return (
    <div>
        <img 
        key={props.id}
        id={props.id}
        src={props.image}
        alt={props.name}
        onClick={() => {props.countImage(props.id)}}

        
        
        />


    </div>

    )
}

export default Image