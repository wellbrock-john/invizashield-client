import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import "./Schedule.css";

export default class Schedule extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div className="Schedule">
        <div className="greeting-div">
          <h2 className="greeting">Hello {this.context.user.first_name}</h2>
        </div>
        <div className="dashboard-content">Schedule</div>{" "}
      </div>
    );
  }
}
