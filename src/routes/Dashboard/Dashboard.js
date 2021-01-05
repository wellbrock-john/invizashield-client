import React, { Component } from "react";
import Account from "../../components/Account/Account";
import Contact from "../../components/Contact/Contact";
import Schedule from "../../components/Schedule/Schedule";
import Context from "../../Context";
import "./Dashboard.css";

export default class Dashboard extends Component {
  state = {
    accountClicked: true,
    scheduleClicked: false,
    contactClicked: false,
  }

  static contextType = Context;

  handleAccountClicked = (e) => {
    e.preventDefault();
    this.setState({
      accountClicked: true,
      scheduleClicked: false,
      contactClicked: false,
    });
  }

  handleScheduleClicked = (e) => {
    e.preventDefault();
    this.setState({
      accountClicked: false,
      scheduleClicked: true,
      contactClicked: false,
    })
  }

  handleContactClicked = (e) => {
    e.preventDefault();
    this.setState({
      accountClicked: false,
      scheduleClicked: false,
      contactClicked: true,
    })
  }

  render() {
    return (
      <section className="dashboard-container">
        <div className="sidebar">
          <ul className="dashboard-ul">
            <li><button className="li-btn" id="account-btn" name="account-btn" type="button" onClick={this.handleAccountClicked}>Account</button></li>
            <li><button className="li-btn" id="schedule-btn" name="schedule-btn" type="button" onClick={this.handleScheduleClicked}>Schedule</button></li>
            <li><button className="li-btn" id="contact-btn" name="contact-btn" type="button" onClick={this.handleContactClicked}>Contact</button></li>
          </ul>
        </div>
        <div className="dashboard-main">
          {
            this.state.scheduleClicked
            ? <Schedule />
            : this.state.contactClicked
            ? <Contact />
            : <Account />
            }
        </div>
      </section>
    );
  }
}
