import React, { Component } from "react";
import ReactPlayer from "react-player";
import Packages from "../../components/Packages/Packages";
import "./ServicesRoute.css";

export default class ServicesRoute extends Component {
  render() {
    return (
      <section className="ServicesRoute" id="Route">
        <div>
          <h2 className="greeting">{"Products & Services"}</h2>
        </div>
        <div className="arch-div">
          <h3>
            <a
              className="xpel-link"
              href="https://www.xpel.com/shop/paint-protection-film"
            >
              {" "}
              XPEL Ultimate
            </a>
          </h3>
          <h5>Paint Protection Film (clear bra)</h5>
          <div className="services-div">
            <div className="xpel-wrapper">
              <div className="packages-wrapper">
                <Packages />
              </div>
              <div className="vid-wrapper">
                <div className="vid-div">
                  <h1 className="vid-description">
                    Installation <i className="fas fa-long-arrow-alt-down" />
                  </h1>
                  <ReactPlayer
                    url="https://youtu.be/6cvhsxaDyAE"
                    width="unset"
                    height="80%"
                  />
                </div>
                <br />
                <div className="vid-div">
                  <h1 className="vid-description">
                    Removal <i className="fas fa-long-arrow-alt-down" />
                  </h1>
                  <ReactPlayer
                    url="https://youtu.be/f4bM9I-ajII"
                    width="unset"
                    height="80%"
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <h3 style={{ margin: "2rem" }}>
            We do it right, so that you won't know it's there until it's doing
            it's job.
          </h3>
        </div>
      </section>
    );
  }
}
