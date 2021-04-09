import React from "react";
//import { photos } from "unsplash-js/dist/internals";

import getPhoto from "./PhotoApi";

class Carussel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      loading: true,
      mainPhoto: [],
      nextPhoto: [],
    };
  }

  handleIndexClick = (event) => {
    let newPhotos = this.state.photos.slice();
    const lastPhoto = newPhotos.shift();
    newPhotos.push(lastPhoto);

    this.setState({
      mainPhoto: this.state.photos[0],
      photos: newPhotos,
    });
  };

  async componentDidMount() {
    let photosArray = await getPhoto();
    //console.log(photosArray + "here!!");
    //console.log("will mount", JSON.stringify(photosArray, null, 2));

    const links = [];
    photosArray.map((item) => links.push(item.urls.small));
 
    const arr = links.shift();
    this.setState({
      photos: links,
      mainPhoto: arr,
    });
  }

  render() {
    const { photos, mainPhoto } = this.state;
    return (
      <div className="mainPhoto">
        <img
          src={mainPhoto}
          alt="random photo"
          width="300px"
          height="300px"
          className="mainPhoto"
        />
        <div className="smaller-carussel">
          <button onClick={this.handleIndexClick} className="buttonStyle">
            next
          </button>
          {photos.map((photo) => (
            <img
              //onClick={this.handleIndexClick}
              src={photo}
              key={photo}
              width="100px"
              height="100px"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carussel;
