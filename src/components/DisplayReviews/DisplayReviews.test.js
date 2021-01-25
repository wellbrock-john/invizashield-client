import React from "react";
import BrowserRouter from "react-router-dom";
import DisplayReviews from "./DisplayReviews";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <BrowserRouter>
    <DisplayReviews />
  </BrowserRouter>;
});
