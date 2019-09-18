import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Image from "./components/Image";
import images from "./images.json"



class App extends React.Component {
  state = {
    images: images
};


removeImage = id => {
const newImages = images.filter(image => image.id === !id)

this.setState({images: newImages});

};




render () {
  return (
    <Wrapper>
      <Header></Header>
      {this.state.images.map(image => (
      <Image  
        key={image.id}
        name={image.name}
        image={image.image}
        removeImage={this.removeImage}

      />
      ))}
    </Wrapper>

  );
}


}

export default App;
