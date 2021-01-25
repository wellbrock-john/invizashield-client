import React from "react";
import BrowserRouter from "react-router-dom";
import ContactRoute from "./ContactRoute";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <BrowserRouter>
    <ContactRoute />
  </BrowserRouter>;
});
