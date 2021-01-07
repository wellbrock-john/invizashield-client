import React from "react";

export default function EditVehicleForm(props) {
    console.log(props)
  return (
    <form className="vm-form" id="vm-form" name="vm-form" aria-label="vm-form">
      <input
        className="vm-form-input"
        id="vm-form-input"
        name="vm-form-input"
        aria-label="vm-form-input"
        defaultValue={props.vehicle.make.value}
      />
    </form>
  );
}
