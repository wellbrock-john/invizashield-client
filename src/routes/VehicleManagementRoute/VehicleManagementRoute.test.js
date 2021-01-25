import React from "react";
import BrowserRouter from "react-router-dom";
import VehicleManagementRoute from "./VehicleManagementRoute";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <BrowserRouter>
    <VehicleManagementRoute />
  </BrowserRouter>;
});
