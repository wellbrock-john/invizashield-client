import React from "react";
import BrowserRouter from "react-router-dom";
import DisplayVehicles from "./DisplayVehicles";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <BrowserRouter>
    <DisplayVehicles />
  </BrowserRouter>;
});
