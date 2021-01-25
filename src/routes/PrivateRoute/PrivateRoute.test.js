import React from "react";
import BrowserRouter from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <BrowserRouter>
    <PrivateRoute />
  </BrowserRouter>;
});
