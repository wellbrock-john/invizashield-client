import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import "./Dashboard.css";

export default class Dashboard extends Component {
  static contextType = UserContext;

  render() {
    return (
      <section className="dashboard-container">
        <div className="sidebar">
          <ul className="dashboard-ul">
            <li><button className="li-btn">Account</button></li>
            <li><button className="li-btn">Schedule</button></li>
            <li><button className="li-btn">Contact</button></li>
          </ul>
        </div>
        <div className="dashboard-main">
          <div className="greeting-div">
            <h2 className="greeting">Hello {this.context.user.first_name}</h2>
          </div>
          <div className="dashboard-content">Replace</div>
        </div>
      </section>
    );
  }
}
