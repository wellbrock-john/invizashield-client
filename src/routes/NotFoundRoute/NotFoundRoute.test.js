import React from "react";
import BrowserRouter from "react-router-dom";
import NotFoundRoute from "./NotFoundRoute";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <BrowserRouter>
    <NotFoundRoute />
  </BrowserRouter>;
});
