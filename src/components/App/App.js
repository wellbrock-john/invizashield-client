import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingRoute from "../../routes/LandingRoute/LandingRoute";
import NotFoundRoute from "../../routes/NotFoundRoute/NotFoundRoute";
import Header from "../Header/Header";

export default class App extends Component {
	state = { hasError: false };

	static getDerivedStateFromError(error) {
		console.error(error);
		return { hasError: true };
	}

	render() {
		const { hasError } = this.state;
		return (
			<div className="App" id="App">
				<Header />
				<main>
					{hasError && (
						<p>
							There was an error. Don't worry, we're on it! We're sorry for the
							inconvenience.
						</p>
					)}
					<Switch>
						<Route exact path={"/"} component={LandingRoute} />
						<Route component={NotFoundRoute} />
					</Switch>
				</main>
			</div>
		);
	}
}
