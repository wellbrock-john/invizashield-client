import React, { Component } from "react";
import { Dummy } from "./ReviewDummyData";
import "./DisplayReviews.css";

export default class DisplayReviews extends Component {
  render() {
    return (
      <span className="DisplayReviews">
        <ul className="reviews-ul">
          {Dummy.map((item, index) => {
            return (
              <li key={index}>
                <strong>{item.name}</strong> - {item.stars} stars
                <br />
                <p>{item.reviewContent}</p>
              </li>
            );
          })}
        </ul>
      </span>
    );
  }
}
