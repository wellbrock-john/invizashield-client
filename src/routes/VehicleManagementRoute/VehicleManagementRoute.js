import React, { Component } from "react";
import EditVehicleForm from "../../components/Forms/EditVehicleForm";
import Context from "../../Context";
import "./VehicleManagementRoute.css";

export default class VehicleManagementRoute extends Component {
	static contextType = Context;

	render() {
		const vehicle =
			this.context.vehicles.find(
				// eslint-disable-next-line
				(v) => v.id == Number(this.props.match.params.id)
			) || {};
		return (
			<div className="VehicleManagementRoute">
				{vehicle &&
				vehicle.id &&
				vehicle.id.toString() === this.props.match.params.id ? (
					<EditVehicleForm {...vehicle} {...this.props}/>
				) : (
					<h2>Loading Your Vehicle...</h2>
				)}
			</div>
		);
	}
}
