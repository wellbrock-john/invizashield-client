import React, { Component } from "react";
import Context from "../../Context";
import DisplayVehicles from "../DisplayVehicles/DisplayVehicles";
import "./Account.css";

export default class Account extends Component {
  static contextType = Context;

  render() {
    const { user } = this.context;
    return (
      <div className="Account">
        <div className="greeting-div">
          <h2 className="greeting">Hey {user.first_name}</h2>
          <p className="welcome">
            Welcome to your personal InvizaGarage&trade;
          </p>
        </div>
        <div className="dashboard-content">
          <DisplayVehicles />
        </div>
      </div>
    );
  }
}
