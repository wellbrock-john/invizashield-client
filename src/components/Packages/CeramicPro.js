import React from "react";
import ReactPlayer from "react-player";
import carzmedicsLogo from "../../components/images/Logo/z-logo-1_1.png";

export default function CeramicPro() {
  return (
    <div className="arch-div">
      <h3>
        <a className="cp-link" href="https://ceramicpro.com/">
          {" "}
          CeramicPro
        </a>
      </h3>
      <h5>
        Installation by:
        <br />
        <br />
        <a className="carzmedics-link" href="https://www.carzmedics.com/">
          <img
            src={carzmedicsLogo}
            alt="Ceramic Coating Ohio | Ceramic Pro Cincinnati | Paint Protection"
          />
        </a>
      </h5>
      <div className="services-div">
        <div>
          <p className="vid-description">
            How it will look <i className="fas fa-long-arrow-alt-down" />
          </p>
          <ReactPlayer
            url="https://youtu.be/Qnp-UeTge0Q"
            width="260px"
            height="260px"
          />
        </div>
      </div>
    </div>
  );
}
