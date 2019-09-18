import React from "react"


function Image (props) {
    return (
    <div>
        <img 
        key={props.key}
        src={props.image}
        alt={props.name}

        
        
        />


    </div>

    )
}

export default Image