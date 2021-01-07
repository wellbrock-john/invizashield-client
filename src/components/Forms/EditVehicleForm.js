import React from "react";

export default function EditVehicleForm(props) {
  return (
    <form className="vm-form" id="vm-form" name="vm-form" aria-label="vm-form">
      <input
        className="vm-form-input"
        id="vm-form-input"
        name="vm-form-input"
        aria-label="vm-form-input"
        defaultValue={props.year}
        required
      />
      <input
        className="vm-form-input"
        id="vm-form-input"
        name="vm-form-input"
        aria-label="vm-form-input"
        defaultValue={props.make}
        required
      />
      <input
        className="vm-form-input"
        id="vm-form-input"
        name="vm-form-input"
        aria-label="vm-form-input"
        defaultValue={props.model}
        required
      />
      <input
        className="vm-form-input"
        id="vm-form-input"
        name="vm-form-input"
        aria-label="vm-form-input"
        defaultValue={props.submodel}
      />
      <input
        className="vm-form-input"
        id="vm-form-input"
        name="vm-form-input"
        aria-label="vm-form-input"
        defaultValue={props.color}
        required
      />
      <input
        className="vm-form-input"
        id="vm-form-input"
        name="vm-form-input"
        aria-label="vm-form-input"
        defaultValue={props.paintCondition}
        required
      />
      <input
        className="vm-form-input"
        id="vm-form-input"
        name="vm-form-input"
        aria-label="vm-form-input"
        defaultValue={null ? "Danger Zone. No Coverage Yet." : props.coverage}
      />
    </form>
  );
}
