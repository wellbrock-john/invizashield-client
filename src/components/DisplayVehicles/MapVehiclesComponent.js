import React from "react";
import { Link } from "react-router-dom";

export default function MapVehicles({...props}) {
  return (
    <li className="vehicle-data">
      <p className="data--primary">
        {props.year} {props.make} {props.model}{" "}
      </p>
      <Link className="data-secondary" to={`/vehicle-management/${props.id}`}>
        <strong>--</strong> Edit
      </Link>
      <button
        className="delete-vehicle"
        type="submit"
        onClick={() => {
          if (window.confirm("Are you sure?")) props.onSubmit(props.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
