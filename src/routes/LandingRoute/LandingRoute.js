import React, { Component } from "react";
import DisplayReviews from "../../components/DisplayReviews/DisplayReviews";
import LoginSignup from "../../components/LoginSignup/LoginSignup";
import "./LandingRoute.css";

class LandingRoute extends Component {
  render() {
    return (
      <section className="LandingRoute">
        <div className="paragraph-plus-form-div">
          <p className="slogan">
            <strong>
              <i>Superior Protection.</i>
            </strong>
            <br />
            <br />
            So, Go Ahead...
            <br />
            Drive It Like You Stole It.
            <br />
            <small> We Won't Tell. </small>
          </p>
          <LoginSignup />
        </div>
        {/* <div className="reviews-div">
          <DisplayReviews />
        </div> */}
      </section>
    );
  }
}

export default LandingRoute;
