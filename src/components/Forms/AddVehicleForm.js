import React, { Component } from "react";
import Context from "../../Context";

export default class AddVehicleForm extends Component {
  static contextType = Context;

render() {
  return (
    <form className="vm-form" id="vm-form" name="vm-form" aria-label="vm-form" onSubmit={e => this.context.handleSubmitVehicle(e)}>
      <label htmlFor="veh-year">Year</label>
      <input
        className="vm-form-input"
        id="veh-year"
        name="year"
        aria-label="Vehicle Year"
        value="2020"
        type="text"
        required
      />
      <label htmlFor="veh-make">Make</label>
      <input
        className="vm-form-input"
        id="veh-make"
        name="make"
        aria-label="Vehicle Make"
        value="Found On Road Dead"
        type="text"
        required
      />
      <label htmlFor="veh-model">Model</label>
      <input
        className="vm-form-input"
        id="veh-model"
        name="model"
        aria-label="vm-form-input"
        type="text"
        value="Fusion"
        required
      />
      <label htmlFor="veh-submodel">Submodel</label>
      <input
        className="vm-form-input"
        id="veh-submodel"
        name="submodel"
        type="text"
        value="Titanium Hybrid"
        aria-label="vm-form-input"
      />
      <label htmlFor="veh-color">Color</label>
      <input
        className="vm-form-input"
        id="veh-color"
        name="color"
        value="Pink"
        type="text"
        aria-label="vm-form-input"
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
        value="1"
        aria-label="vm-form-input"
        required
      />
      <label htmlFor="veh-coverage">Coverage</label>
      <input
        className="vm-form-input"
        id="veh-coverage"
        name="coverage"
        type="text"
        aria-label="vm-form-input"
        defaultValue="Danger Zone. No Coverage Yet."
      />
      <input type="submit" name="submit" value="Get Quote" aria-label="Get Quote Button" />
    </form>
  );
}
}