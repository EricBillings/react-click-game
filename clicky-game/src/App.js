import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Image from "./components/Image";
import images from "./images.json"



class App extends React.Component {
  state = {
    images: images
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

      />
      ))}
    </Wrapper>

  );
}


}

export default App;
