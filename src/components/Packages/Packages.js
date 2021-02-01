import React from "react";
import partialFront from "../images/packages/partial.png";
import fullFront from "../images/packages/full_front.png";
import fullBody from "../images/packages/full_body.png";
import "./Packages.css";

export default function Packages() {
  return (
    <div className="packages-container">
      <h1 className="packages-h1">Packages</h1>
      <div className="tier-wrapper">
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
            <ul className="tier-one-coverage-list">
              <li className="coverage-list-item">
                <p>Partial Hood and Fender Coverage</p>
              </li>
              <li className="coverage-list-item">
                <p>Front Bumper Coverage</p>
              </li>
              <li className="coverage-list-item">
                <p>Mirror and Door-cup Coverage</p>
              </li>
              <li className="coverage-list-item">
                <p>Additional Coverage Upon Request</p>
                <br />
                <small>(Prices & options vary*)</small>
              </li>
            </ul>
          </div>
        </div>
        <div className="tier-container">
          <div className="tier-sub-container">
            <h2 className="tier-header">Tier Two</h2>
            <h3 className="tier-sub-header">Full Front</h3>
            <img
              src={fullFront}
              alt="Tier Two Package"
              className="package-img"
            />
          </div>
          <div className="tier-sub-container">
            <h2 className="tier-header">Coverage Details</h2>
            <ul className="tier-two-coverage-list">
              <li className="coverage-list-item">
                <p>Full Hood and Fender Coverage</p>
              </li>
              <li className="coverage-list-item">
                <p>Front Bumper Coverage</p>
              </li>
              <li className="coverage-list-item">
                <p>Headlights, Mirror and Door-cup Coverage</p>
              </li>
              <li className="coverage-list-item">
                <p>Additional Coverage Upon Request</p>
                <br />
                <small>(Prices & options vary)</small>
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
            <ul className="tier-three-coverage-list">
              <li className="coverage-list-item">
                <p>Full Hood and Fender Coverage</p>
              </li>
              <li className="coverage-list-item">
                <p>Front and Rear Bumper Coverage</p>
              </li>
              <li className="coverage-list-item">
                <p>Mirror and Full Door Coverage</p>
              </li>
              <li className="coverage-list-item">
                <p>Roof Coverage</p>
              </li>
              <li className="coverage-list-item">
                <p>Full Rear Fender Coverage</p>
              </li>
              <li className="coverage-list-item">
                <p>Hatch Coverage</p>
              </li>
              <li className="coverage-list-item">
                <p>Coverage for All Miscellaneous Panels</p>
                <br />
                <small>(Prices & options vary*)</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
