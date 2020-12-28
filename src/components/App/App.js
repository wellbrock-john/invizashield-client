import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingRoute from "../../routes/LandingRoute";
import NotFoundRoute from "../../routes/NotFoundRoute/NotFoundRoute";

export default class App extends Component {
	render() {
		return (
			<div className="App" id="App">
				<main>
					{hasError && (
						<p>
							There was an error. Don't worry, we're on it! We're sorry for the
							inconvenience.
						</p>
					)}
					<Switch>
						<Route component={LandingRoute} />
						<Route component={NotFoundRoute} />
					</Switch>
				</main>
			</div>
		);
	}
}
