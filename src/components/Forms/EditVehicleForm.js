import React, { Component } from "react";
import Context from "../../Context";
import "./Form.css";

export default class EditVehicleForm extends Component {
  static contextType = Context;

  onSubmit = (e, id) => {
    this.context.handleSubmitVehicle(e, id);
    this.props.history.push("/dashboard");
  }

  render() {
    const id = this.props.id;
    return (
      <form
        className="vm-form"
        id="vm-edit-form"
        name="vm-form"
        aria-label="Edit vehicle form"
        onSubmit={e => this.onSubmit(e, id)}
      >
        <label htmlFor="veh-year">Year</label>
        <input
          className="vm-form-input"
          id="veh-year"
          name="year"
          aria-label="Vehicle Year"
          type="text"
          defaultValue={this.props.year}
          required
        />
        <label htmlFor="veh-make">Make</label>
        <input
          className="vm-form-input"
          id="veh-make"
          name="make"
          aria-label="Vehicle Make"
          type="text"
          defaultValue={this.props.make}
          required
        />
        <label htmlFor="veh-model">Model</label>
        <input
          className="vm-form-input"
          id="veh-model"
          name="model"
          aria-label="Vehicle Model"
          type="text"
          defaultValue={this.props.model}
          required
        />
        <label htmlFor="veh-submodel">Submodel</label>
        <input
          className="vm-form-input"
          id="veh-submodel"
          name="submodel"
          aria-label="Vehicle Submodel"
          type="text"
          defaultValue={this.props.submodel === null ? "" : this.props.submodel}
        />
        <label htmlFor="veh-color">Color</label>
        <input
          className="vm-form-input"
          id="veh-color"
          name="color"
          aria-label="Vehicle Color"
          type="text"
          defaultValue={this.props.color}
          required
        />
        <label htmlFor="veh-paint-condition">Paint Condition</label>
        <input
          className="vm-form-input"
          id="veh-paintCondition"
          name="paintCondition"
          type="number"
          min="1"
          max="10"
          step="1"
          aria-label="Vehicle Paint Condition On A Scale Of One To Ten"
          defaultValue={this.props.paintCondition}
          required
        />
        <label htmlFor="veh-coverage">Coverage</label>
        <input
          className="vm-form-input"
          id="veh-coverage"
          name="coverage"
          aria-label="Vehicle Coverage"
          type="text"
          defaultValue={
            null ? "Danger Zone. No Coverage Yet." : this.props.coverage
          }
        />
        <input
          type="submit"
          name="submit"
          value="Save"
          aria-label="Save Button"
        />
      </form>
    );
  }
}
