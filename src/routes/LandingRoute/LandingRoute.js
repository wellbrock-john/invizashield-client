import React, { Component } from "react";
import LoginSignup from "../../components/LoginSignup/LoginSignup";
import TokenService from "../../services/token-service";
import "./LandingRoute.css";
import { Link } from "react-router-dom";

class LandingRoute extends Component {
	render() {
		return (
			<section className="LandingRoute" id="Route">
				<div className="paragraph-plus-form-div">
					<h2 className="greeting">
						<strong>
							<i>Superior Protection.</i>
							<br />
							<i>Competitive Pricing.</i>
						</strong>
						<br />
						<br />
						<span className="slogan-span">
							{" "}
							So, Go Ahead... Drive It Like You Stole It.
							<br />
							<small> We Won't Tell. </small>
						</span>
					</h2>
					<section>
						<article>
							Concours d'Elegance Award Winning installation quality?{" "}
							<i className="fas fa-check"></i>
							<br />
							<br />
							Setting the gold standard for PPF installation for over 15 years?{" "}
							<i className="fas fa-check"></i>
							<br />
							<br />
							Combined team experience of over 30 years?{" "}
							<i className="fas fa-check"></i>
							<br />
							<br />
							Commitment to your satisfaction? <i className="fas fa-check" />
							<br />
							<br />
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
