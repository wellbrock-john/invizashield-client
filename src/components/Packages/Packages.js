import React from "react";
import partialFront from "../images/packages/partial.png";
import fullFront from "../images/packages/full_front.png";
import fullBody from "../images/packages/full_body.png";
import "./Packages.css";

export default function Packages() {
  return (
    <div className="packages-container">
        <h1 className="packages-h1">Packages</h1>
      <div className="tier-container">
        <div className="tier-sub-container">
          <h2 className="tier-header">Tier One</h2>
          <h3 className="tier-sub-header">Partial Front</h3>
          <img
            src={partialFront}
            alt="Tier One Package"
            className="package-img"
          />
        </div>
        <div className="tier-sub-container">
          <h2 className="tier-header">Coverage Details</h2>
          <ul className="coverage-list">
            <li className="coverage-list-item">
              Partial Hood and Fender Coverage
            </li>
            <li className="coverage-list-item">Front Bumper Coverage</li>
            <li className="coverage-list-item">Mirror and Door-cup Coverage</li>
            <li className="coverage-list-item">
              Additional Coverage Upon Request <small>(i.e. Headlights | Luggage Area |
              Custom Design Pieces | etc.)</small>
            </li>
          </ul>
        </div>
      </div>
      <div className="tier-container">
        <div className="tier-sub-container">
          <h2 className="tier-header">Tier Two</h2>
          <h3 className="tier-sub-header">Full Front</h3>
          <img src={fullFront} alt="Tier Two Package" className="package-img" />
        </div>
        <div className="tier-sub-container">
          <h2 className="tier-header">Coverage Details</h2>
          <ul className="coverage-list">
            <li className="coverage-list-item">
              Full Hood and Fender Coverage
            </li>
            <li className="coverage-list-item">Front Bumper Coverage</li>
            <li className="coverage-list-item">
              Headlights, Mirror and Door-cup Coverage
            </li>
            <li className="coverage-list-item">
              Additional Coverage Upon Request <small>(i.e. Luggage Area | Custom
              Design Pieces | etc.)</small>
            </li>
          </ul>
        </div>
      </div>
      <div className="tier-container">
        <div className="tier-sub-container">
          <h2 className="tier-header">Tier Three</h2>
          <h3 className="tier-sub-header">Full Body</h3>
          <img
            src={fullBody}
            alt="Tier Three Package"
            className="package-img"
          />
        </div>
        <div className="tier-sub-container">
          <h2 className="tier-header">Coverage Details</h2>
          <ul className="coverage-list">
            <li className="coverage-list-item">
              Full Hood and Fender Coverage
            </li>
            <li className="coverage-list-item">
              Front and Rear Bumper Coverage
            </li>
            <li className="coverage-list-item">
              Mirror and Full Door Coverage
            </li>
            <li className="coverage-list-item">Roof Coverage</li>
            <li className="coverage-list-item">Full Rear Fender Coverage</li>
            <li className="coverage-list-item">Hatch Coverage</li>
            <li className="coverage-list-item">
              Coverage for All Miscellaneous Panels <small>(options vary*)</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
