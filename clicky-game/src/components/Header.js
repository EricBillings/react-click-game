import React from "react"

const h3Style = {
    margin: "20px"
}

function Header (props) {
    return (
    <div className="jumbotron text-center">
        {props.children}
    <h1 className="display-1">Clicky Game</h1>
    <h3 style={h3Style}><div>Game Score: {props.gameScore}</div>
    Top Score: {props.topScore}
    </h3>
    <h1>{props.guessVerdict}</h1>
    <h4>{props.playingOrNot}</h4>

    

    </div>
    )

}

export default Header