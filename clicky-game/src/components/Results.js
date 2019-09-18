import React from "react"



    function Results (props) {
        return (
            <ul>
                {props.images.map((image) => (
                    <div key={image.id}>
                        <img src={image.image}/>
                    </div>
                ))}
            </ul>
        )
    }


    export default Results
