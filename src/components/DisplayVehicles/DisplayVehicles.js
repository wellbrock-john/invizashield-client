import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Context from "../../Context";
import AuthApiService from "../../services/auth-api-service";
import "./DisplayVehicles.css";

class DisplayVehicles extends Component {
  static contextType = Context;

  handleDelete = (id) => {
    AuthApiService.deleteVehicle(id);
    this.context.setVehiclesAfterDelete(id);
  }

  render() {
    const { vehicles } = this.context;
    return (
      <div className="DisplayVehicles">
        <ul className="vehicles-list">
          {vehicles.map((vehicle, index) => {
            return (
              <li key={index} className="vehicle-data">
                <p className="data--primary">
                  {vehicle.year}{" "}
                  {vehicle.make}{" "}
                  {vehicle.model}{" "}
                </p>
                <Link
                  className="data-secondary"
                  to={`/vehicle-management/${vehicle.id}`}
                >
                  <strong>--</strong> Edit
                </Link>
                <button className="delete-vehicle" type="submit" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.handleDelete(vehicle.id) }}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
         <a className="add-vehicle-link" href="/vehicle-management/">
         <i className="fas fa-shield-alt" /> Add A New Vehicle And Get A Free Quote Here! <i className="fas fa-shield-alt" />
        </a>
      </div>
    );
  }
}

export default withRouter(DisplayVehicles);
