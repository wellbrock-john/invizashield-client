import React, { Component } from "react";
import Account from "../../components/Account/Account";
import Contact from "../../components/Contact/Contact";
import Schedule from "../../components/Schedule/Schedule";
import Context from "../../Context";
import TokenService from "../../services/token-service";
import "./Dashboard.css";

export default class Dashboard extends Component {
  static contextType = Context;

  state = {
    accountClicked: true,
    scheduleClicked: false,
    contactClicked: false,
    error: null,
  };

  static contextType = Context;

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.context.getData();
    }
  }

  handleAccountClicked = (e) => {
    e.preventDefault();
    this.setState({
      accountClicked: true,
      scheduleClicked: false,
      contactClicked: false,
    });
  };

  handleScheduleClicked = (e) => {
    e.preventDefault();
    this.setState({
      accountClicked: false,
      scheduleClicked: true,
      contactClicked: false,
    });
  };

  handleContactClicked = (e) => {
    e.preventDefault();
    this.setState({
      accountClicked: false,
      scheduleClicked: false,
      contactClicked: true,
    });
  };

  render() {
    const  user  = this.context.user || {};

    return (
      <>
      { user && user.id ? (<section className="dashboard-container">
        <div className="sidebar">
          <ul className="dashboard-ul">
            <li>
              <button
                className="li-btn"
                id="account-btn"
                name="account-btn"
                type="button"
                onClick={this.handleAccountClicked}
              >
                Account
              </button>
            </li>
            <li>
              <button
                className="li-btn"
                id="schedule-btn"
                name="schedule-btn"
                type="button"
                onClick={this.handleScheduleClicked}
              >
                Schedule
              </button>
            </li>
            <li>
              <button
                className="li-btn"
                id="contact-btn"
                name="contact-btn"
                type="button"
                onClick={this.handleContactClicked}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="dashboard-main">
          {this.state.scheduleClicked ? (
            <Schedule />
          ) : this.state.contactClicked ? (
            <Contact />
          ) : (
            <Account />
          )}
        </div>
      </section>) : (
        <h2>Loading Your Account</h2>
      )}
      </>
    );
  }
}
