import React from "react"
import Results from "./Results"
import images from "../images.json"


class ImageList extends React.Component {
    state = {
        images: images
    }



    render () {
        return (
            <div>
                List
            <Results images={this.state.images} />
            </div>
        )

    }

}

export default ImageList