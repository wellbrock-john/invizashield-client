import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Config from "../../config";
import Context from "../../Context";
import ContactRoute from "../../routes/ContactRoute/ContactRoute";
import Dashboard from "../../routes/Dashboard/Dashboard";
import GalleryRoute from "../../routes/GalleryRoute/GalleryRoute";
import LandingRoute from "../../routes/LandingRoute/LandingRoute";
import NotFoundRoute from "../../routes/NotFoundRoute/NotFoundRoute";
import PrivateRoute from "../../routes/PrivateRoute/PrivateRoute";
import ServicesRoute from "../../routes/ServicesRoute/ServicesRoute";
import VehicleManagementRoute from "../../routes/VehicleManagementRoute/VehicleManagementRoute";
import TokenService from "../../services/token-service";
import Header from "../Header/Header";
import "./App.css";

export default class App extends Component {
  state = {
    hasError: false,
    user: {},
    vehicles: [],
    vehicle: {},

    refreshPage: () => {
      window.location.reload();
    },

    getData: () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
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

      fetch(`${Config.API_ENDPOINT}/vehicles`, options)
        .then((res) => {
          if (!res.ok) {
            return Promise.reject(res.statusText);
          }
          return res.json();
        })
        .then((vehicles) => this.setState({ vehicles }));
    },

    getVehicleById: (id) => {
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TokenService.getAuthToken()}`,
            Accept: "application/json",
          },
        };
        fetch(`${Config.API_ENDPOINT}/vehicles/${id}`, options)
        .then((res) => {
          if (!res.ok) {
            return Promise.reject(res.statusText);
          }
          return res.json();
        })
        .then((vehicle) => this.setState({ vehicle }));
    },

    logout: () => {
      this.setState({
        user: {},
      });
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
              
              <PrivateRoute path={"/dashboard"} component={Dashboard} />
              <PrivateRoute path={"/vehicle-management/:id"} component={VehicleManagementRoute} />

              <Route exact path={"/"} component={LandingRoute} />
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
