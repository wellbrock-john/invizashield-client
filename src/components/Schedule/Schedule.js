import React, { Component } from "react";
import Context from "../../Context";
import "./Schedule.css";

export default class Schedule extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="Schedule">
        <div className="greeting-div">
          <h2 className="greeting">Automated scheduling coming soon!</h2>
          <h4>
            For now, if you have filled out a "New Vehicle Form", you can sit
            back, relax and you will receive a phone call from Invizashield's
            owner, John Wellbrock.
          </h4>
          <p>
            If you would like to speak with him sooner, then please call
            <br />
            <a href="tel:+1-513-703-4235">+1 (513) 703-4235</a>
          </p>
        </div>
      </div>
    );
  }
}
