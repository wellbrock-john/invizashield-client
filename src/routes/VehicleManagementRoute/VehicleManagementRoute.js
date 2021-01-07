import React, { Component } from "react";
import EditVehicleForm from "../../components/Forms/EditVehicleForm";
import AddVehicleForm from "../../components/Forms/AddVehicleForm";
import Context from "../../Context";
import "./VehicleManagementRoute.css";

export default class VehicleManagementRoute extends Component {
  static contextType = Context;
  
  state = {
    vehicle: JSON.parse(window.localStorage.getItem("vehicle")),
  }

  render() {
    const { vehicle } = this.state;
    return (
      <div className="VehicleManagementRoute">
        { vehicle.id.toString() === this.props.match.params.id ? 
          ( 
             <EditVehicleForm {...vehicle} /> 
          ) : (
            <AddVehicleForm />
          )
        }
      </div>
    );
  }
}
