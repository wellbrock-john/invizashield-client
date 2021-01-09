import React, { Component } from "react";
import Context from "../../Context";
import "./Form.css";

export default class AddVehicleForm extends Component {
  static contextType = Context;

render() {
  return (
    <form className="vm-form" id="vm-form" name="vm-form" aria-label="Add vehicle form" onSubmit={e => this.context.handleSubmitVehicle(e)}>
      <label htmlFor="veh-year">Year</label>
      <input
        className="vm-form-input"
        id="veh-year"
        name="year"
        aria-label="Vehicle Year"
        type="text"
        required
      />
      <label htmlFor="veh-make">Make</label>
      <input
        className="vm-form-input"
        id="veh-make"
        name="make"
        aria-label="Vehicle Make"
        type="text"
        required
      />
      <label htmlFor="veh-model">Model</label>
      <input
        className="vm-form-input"
        id="veh-model"
        name="model"
        aria-label="Vehicle Model"
        type="text"
        required
      />
      <label htmlFor="veh-submodel">Submodel</label>
      <input
        className="vm-form-input"
        id="veh-submodel"
        name="submodel"
        type="text"
        aria-label="Vehicle Submodel"
      />
      <label htmlFor="veh-color">Color</label>
      <input
        className="vm-form-input"
        id="veh-color"
        name="color"
        type="text"
        aria-label="Vehicle Color"
        required
      />
      <label htmlFor="veh-paint-condition">Paint Condition</label>
      <input
        className="vm-form-input"
        id="veh-paint-condition"
        name="paintCondition"
        type="number"
        min="1"
        max="10"
        step="1"
        aria-label="Vehicle Paint Condition On A Scale Of One To Ten"
        required
      />
      <label htmlFor="veh-coverage">Coverage</label>
      <input
        className="vm-form-input"
        id="veh-coverage"
        name="coverage"
        type="text"
        aria-label="Vehicle Coverage"
        defaultValue="Danger Zone. No Coverage Yet."
      />
      <input type="submit" name="submit" value="Get Quote" aria-label="Get Quote Button" />
    </form>
  );
}
}