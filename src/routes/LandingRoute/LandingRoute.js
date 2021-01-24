import React, { Component } from "react";
import LoginSignup from "../../components/LoginSignup/LoginSignup";
import TokenService from "../../services/token-service";
import "./LandingRoute.css";
import { Link } from "react-router-dom";

class LandingRoute extends Component {
  render() {
    return (
      <section className="LandingRoute" id="Route">
        <h2 className="greeting">
          <strong>
            <i className="landing-greeting">Superior Protection</i>
            <br />
            <i className="landing-greeting">Competitive Pricing</i>
          </strong>
          <br />
          <br />
          <span className="slogan-span">
            {" "}
            So, Go Ahead... Drive It Like You Stole It.
            <br />
            <small className="shhh"> We Won't Tell. </small>
          </span>
        </h2>
        <div className="paragraph-plus-form-div">
          <section>
            <article>
              <h3 className="fact-check">Fact Check:</h3>
              <span className="article-span">
                Setting the gold standard for PPF installation for over 15 years{" "}
                <i className="fas fa-check"></i>
              </span>
              <span className="article-span">
                Concours d'Elegance Award Winning installation quality{" "}
                <i className="fas fa-check"></i>
              </span>
              <span className="article-span">
                Combined team experience of over 30 years{" "}
                <i className="fas fa-check"></i>
              </span>
              <span className="article-span">
                Commitment to your satisfaction <i className="fas fa-check" />
              </span>
              Still need convincing that you've found the shop for you? Checkout
              our gallery page and see a small fraction of the long list of our
              satisfied clients and their vehicles.
            </article>
          </section>

          {!TokenService.hasAuthToken() ? (
            <section className="reel-me-in-section">
              <h3 className="reel-me-in">
                Do you like special offers?
                <br />
                ...of course you do!
              </h3>
              <p className="reel-me-in">
                Sign up for an Account below and we'll give you 5% off your next{" "}
                <Link to={"/services"}>package</Link> purchase.{" "}
                <i className="fas fa-hand-holding-usd" />
              </p>
              <LoginSignup />
            </section>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}

export default LandingRoute;
