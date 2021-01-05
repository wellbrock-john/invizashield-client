import React, { Component } from "react";
import Context from "../../Context";
import "./Account.css";

export default class Account extends Component {
  static contextType = Context;

  render() {
    const { user } = this.context;
    return (
      <div className="Account">
        <div className="greeting-div">
          <h2 className="greeting">Hello {user.first_name}</h2>
        </div>
        <div className="dashboard-content">Account</div>{" "}
      </div>
    );
  }
}
