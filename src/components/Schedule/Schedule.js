import React, { Component } from "react";
import Context from "../../Context";
import "./Schedule.css";

export default class Schedule extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="Schedule">
        <div className="greeting-div">
          <h2 className="greeting">Schedule Your Next Appointment</h2>
        </div>
        <div className="dashboard-content">Schedule</div>{" "}
      </div>
    );
  }
}