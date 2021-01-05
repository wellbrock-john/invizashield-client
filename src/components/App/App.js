import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute/PrivateRoute";
import LandingRoute from "../../routes/LandingRoute/LandingRoute";
import NotFoundRoute from "../../routes/NotFoundRoute/NotFoundRoute";
import Header from "../Header/Header";
import TokenService from "../../services/token-service";
import Config from "../../config";
import Context from "../../Context";
import Dashboard from "../../routes/Dashboard/Dashboard";
import ServicesRoute from "../../routes/ServicesRoute/ServicesRoute";
import GalleryRoute from "../../routes/GalleryRoute/GalleryRoute";
import ContactRoute from "../../routes/ContactRoute/ContactRoute";

export default class App extends Component {
	state = {
		hasError: false,
		user: {},

		getData: (user) => {
			const options = {
				method: "GET",
				headers: {
					Authorization: `Bearer ${TokenService.getAuthToken(user)}`,
					Accept: "application/json",
				},
			};
			fetch(`${Config.API_ENDPOINT}/users`, options)
				.then((res) => {
					if (!res.ok) {
						return Promise.reject(res.statusText);
					}
					return res.json();
				})
				.then((user) => this.setState({ user }));
		},
	};

	static getDerivedStateFromError(error) {
		console.error(error);
		return { hasError: true };
	}

	componentDidMount() {
		if (TokenService.hasAuthToken()) {
			this.state.getData();
		}
	}

	render() {
		const { hasError } = this.state;
		return (
			<Context.Provider value={this.state}>
				<div className="App" id="App">
					<Header />
					<main>
						{hasError && (
							<p>
								There was an error. Don't worry, we're on it! We're sorry for
								the inconvenience.
							</p>
						)}
						<Switch>
							<PrivateRoute exact path={"/"} component={Dashboard} />
							<Route
								path={"/landing"}
								component={LandingRoute}
								{...this.props}
							/>
							<Route path={"/services"} component={ServicesRoute} />
							<Route path={"/gallery"} component={GalleryRoute} />
							<Route path={"/contact"} component={ContactRoute} />
							<Route component={NotFoundRoute} />
						</Switch>
					</main>
				</div>
			</Context.Provider>
		);
	}
}
