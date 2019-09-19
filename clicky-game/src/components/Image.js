import React from "react"

const imageStyle = {
    margin: "10px",
    display: "inline-block"
}


function Image (props) {
    return (
        <div style={imageStyle}>

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