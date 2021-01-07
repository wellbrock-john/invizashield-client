import React, { Component } from "react";
import EditVehicleForm from "../../components/Forms/EditVehicleForm";
import AddVehicleForm from "../../components/Forms/AddVehicleForm";
import Context from "../../Context";
import "./VehicleManagementRoute.css";

export default class VehicleManagementRoute extends Component {
  static contextType = Context;

  render() {
    const { vehicle } = this.context;
    console.log(vehicle.id)
    console.log(this.props.match.params.id)
    return (
      <div className="VehicleManagementRoute">
        { vehicle.id === this.props.match.params.id ? 
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
