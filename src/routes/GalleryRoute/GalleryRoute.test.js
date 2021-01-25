import React from "react";
import BrowserRouter from "react-router-dom";
import GalleryRoute from "./GalleryRoute";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <BrowserRouter>
    <GalleryRoute />
  </BrowserRouter>;
});
