import React, { Component } from "react";
import EditVehicleForm from "../../components/Forms/EditVehicleForm";
import Context from "../../Context";
import "./VehicleManagementRoute.css";

export default class VehicleManagementRoute extends Component {
  static contextType = Context;
  
  render() { 
    // eslint-disable-next-line
    const  vehicle  = this.context.vehicles.find(v=>v.id==Number(this.props.match.params.id)) || {};
    return (
      <div className="VehicleManagementRoute">
        { vehicle && vehicle.id && vehicle.id.toString() === this.props.match.params.id ? 
          ( 
             <EditVehicleForm {...vehicle} /> 
          ) : (
            <h2>Loading Your Vehicle...</h2>
          )
        }
      </div>
    );
  }
}
