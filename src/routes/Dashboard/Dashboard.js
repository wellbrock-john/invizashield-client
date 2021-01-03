import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import "./Dashboard.css";

export default class Dashboard extends Component {
  static contextType = UserContext;

  render() {
    return (
      <section className="dashboard-container">
        <div className="sidebar">
          <ul>
            <li>Account</li>
            <li>Schedule</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="dashboard-main">
          <div className="greeting-div">
            <h2 className="greeting">Hello {this.context.user.first_name}</h2>
          </div>
          <div className="dashboard-content">DB</div>
        </div>
      </section>
    );
  }
}
