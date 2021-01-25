import React from "react";
import BrowserRouter from "react-router-dom";
import LandingRoute from "./LandingRoute";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <BrowserRouter>
    <LandingRoute />
  </BrowserRouter>;
});
