import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Context from "../../Context";
import "./DisplayVehicles.css";

class DisplayVehicles extends Component {
  static contextType = Context;

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
                <Link
                  className="data-secondary"
                  to={`/vehicle-management/${vehicle.id}`}
                >
                  Edit
                </Link>
              </li>
            );
          })}
        </ul>
        <a className="add-vehicle-link" href="/vehicle-management/">
          Add A New Vehicle And Get A Free Quote!
        </a>
      </div>
    );
  }
}

export default withRouter(DisplayVehicles);
