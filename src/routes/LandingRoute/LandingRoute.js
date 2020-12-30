import React, { Component } from "react";
import LoginSignup from "../../components/LoginSignup/LoginSignup";
import "./LandingRoute.css";

class LandingRoute extends Component {
  render() {
    return (
      <section className="LandingRoute">
        <div className="paragraph-plus-form-div">
          <p className="slogan">
            <strong><i>Superior Protection.</i></strong> 
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
      </section>
    );
  }
}

export default LandingRoute;
