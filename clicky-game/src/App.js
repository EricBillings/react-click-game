import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Image from "./components/Image";
import images from "./images.json"


// From Stack Overflow //
function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}


class App extends React.Component {
  state = {
    images: images,
    guesses: [],
    gameScore: 0,
    topScore: 0,
    guessVerdict: "Click an Image to Start",
    playingOrNot: "Click on an Image to Score Points. If you Click on All of the Images Once, You Win. If you Click on any Image more than Once, You Lose"
};



countImage = id => {
this.setState({playingOrNot: ""})
this.state.guesses.push(id);
const checkSet = [...new Set(this.state.guesses)];
if (checkSet.length === this.state.images.length) {
  let instantScore = this.state.images.length;
  this.setState({gameScore: instantScore})
  this.setState({topScore: this.state.images.length})
  this.setState({gameScore: 0})
  this.setState({guesses: []})
  this.setState({guessVerdict: "You Won!"})

  console.log("You Win")
} else if 
  (checkSet.length === this.state.guesses.length) {
  let instantScore = this.state.gameScore + 1;
  this.setState({gameScore: instantScore})
  this.setState({guessVerdict: "Good Choice!"})
  console.log("Keep Playing");
} else if
  (checkSet.length !== this.state.guesses.length) {
  if (this.state.gameScore > this.state.topScore) {
    this.setState({topScore: this.state.gameScore})
  }
  this.setState({gameScore: 0})
  this.setState({guesses: []})
  this.setState({guessVerdict: "Bad Choice, You Lost!"})
  console.log("You Lose")
} else {
  let instantScore = this.state.gameScore + 1;
  this.setState({gameScore: instantScore})
  this.setState({guessVerdict: "How did this happen?"})
  console.log("Keep Playing")
}




const newImages = this.state.images;
shuffle(newImages);
this.setState({images: newImages});

};




render () {

  const imageGalleryStyle = {
    "margin": "10px",
    "text-align": "center"

  };


  return (
  
    <Wrapper className="Container">
      <Header 
      guessVerdict={this.state.guessVerdict}
      gameScore={this.state.gameScore}
      topScore={this.state.topScore}
      playingOrNot={this.state.playingOrNot}
      />


      <div style={imageGalleryStyle}>
      {this.state.images.map(image => (
      <Image  
        key={image.id}
        id={image.id}
        name={image.name}
        image={image.image}
        countImage={() => {this.countImage(image.id)}}
      />
      ))}
      </div>
    </Wrapper>

  );
}


}

export default App;
