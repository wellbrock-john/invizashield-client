import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Context from "../../Context";
import AuthApiService from "../../services/auth-api-service";
import MapVehicles from "./MapVehiclesComponent";
import "./DisplayVehicles.css";

class DisplayVehicles extends Component {
  static contextType = Context;

  handleDelete = (id) => {
    AuthApiService.deleteVehicle(id);
    this.context.setVehiclesAfterDelete(id);
  };

  render() {
    const { vehicles } = this.context;

    return (
      <div className="DisplayVehicles">
        <ul className="vehicles-list">
          {vehicles.map((vehicle, index) => {
            return <MapVehicles {...vehicle} key={index} onSubmit={(id) => this.handleDelete(id)}/>;
          })}
        </ul>
        <a className="add-vehicle-link" href="/vehicle-management/">
          <i className="fas fa-shield-alt" /> Add A New Vehicle And Get A Free
          Quote Here! <i className="fas fa-shield-alt" />
        </a>
      </div>
    );
  }
}

export default withRouter(DisplayVehicles);
