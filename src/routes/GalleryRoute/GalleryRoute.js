import React, { Component } from "react";
import Carousel from "../../components/Gallery/Carousel/Carousel.js";
import "./GalleryRoute.css";

export default class GalleryRoute extends Component {
  render() {
    return (
      <section className="Gallery" id="#Route">
        <Carousel />
      </section>
    );
  }
}
