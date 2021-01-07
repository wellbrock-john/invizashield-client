import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Context from "../../Context";
import "./DisplayVehicles.css";

class DisplayVehicles extends Component {
  static contextType = Context;

  handleClick = (vehicle) => {
    this.context.vehicle = vehicle;
    const objToStr = this.context.vehicle;
    const vehicleJSON = JSON.stringify(objToStr);
    window.localStorage.setItem("vehicle", vehicleJSON);
    this.props.history.push(`/vehicle-management/${vehicle.id}`);
  };

  render() {
    const { vehicles } = this.context;

    return (
      <div className="DisplayVehicles">
        <ul className="vehicles-list">
          {vehicles.map((vehicle, index) => {
            return (
              <li key={index} className="vehicle-data">
                <p className="data--primary">
                  {vehicle.year}
                  {vehicle.make}
                  {vehicle.model}
                </p>
                <button
                  className="data-secondary"
                  onClick={() => this.handleClick(vehicle)}
                >
                  Edit
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(DisplayVehicles);
