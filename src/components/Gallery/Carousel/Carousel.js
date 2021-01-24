import React, { Component } from "react";
import { imgUrls } from "../ImgUrls";
import { Arrow } from "../Arrow/Arrow";
import { ImageSlide } from "../ImageSlide/ImageSlide";
import "./Carousel.css";

export default class Carousel extends Component {
  state = {
    currentImageIndex: 0,
  };

  previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
    });
  };

  nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
    });
  };

  render() {
    return (
      <div className="carousel">
        <Arrow direction="left" clickFunction={this.previousSlide} />

        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />

        <Arrow direction="right" clickFunction={this.nextSlide} />
      </div>
    );
  }
}
