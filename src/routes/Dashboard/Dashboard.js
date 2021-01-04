import React, { Component } from "react";
import Account from "../../components/Account/Account";
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
          <Account />
        </div>
      </section>
    );
  }
}
