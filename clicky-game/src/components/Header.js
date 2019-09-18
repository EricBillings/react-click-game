import React from "react"


function Header (props) {
    return (
    <div className="container">
        {props.children}
    <h1>Clicky Game</h1>
    <h2>Click on an Image to Score Points. If you Click on All of the Images Once, You Win. If you Click on any Image more than Once, You Lose</h2>
    </div>
    )

}

export default Header