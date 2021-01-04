import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import "./Account.css";

export default class Account extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div className="Account">
        <div className="greeting-div">
          <h2 className="greeting">Hello {this.context.user.first_name}</h2>
        </div>
        <div className="dashboard-content">Account</div>{" "}
      </div>
    );
  }
}
