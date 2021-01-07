import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Context from "../../Context";
import "./DisplayVehicles.css";

class DisplayVehicles extends Component {
  static contextType = Context;

  handleClick = (id) => {
    this.context.getVehicleById(id);
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
                  onClick={() => this.handleClick(vehicle.id)}
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

export default withRouter(DisplayVehicles)