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
import AuthApiService from "../../services/auth-api-service";
import Header from "../Header/Header";
import "./App.css";
import AddVehicleForm from "../Forms/AddVehicleForm";

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

    handleSubmitVehicle: (e) => {
      e.preventDefault();
      const {
        year,
        make,
        model,
        submodel,
        color,
        paintCondition,
        coverage,
      } = e.target;
      const vehicle = {
        year: year.value,
        make: make.value,
        model: model.value,
        submodel: submodel.value,
        color: color.value,
        paintCondition: paintCondition.value,
        coverage: coverage.value,
      };
      AuthApiService.postVehicle(vehicle)
      .then((res) => {
        if (res.status === 204) {
          return this.setState({confirmation: true})
        } else {
          return this.setState({showError: true})
        }
      })
    },

    // getVehicleById: (id) => {
    //     const options = {
    //       method: "GET",
    //       headers: {
    //         Authorization: `Bearer ${TokenService.getAuthToken()}`,
    //         Accept: "application/json",
    //       },
    //     };
    //     fetch(`${Config.API_ENDPOINT}/vehicles/${id}`, options)
    //     .then((res) => {
    //       if (!res.ok) {
    //         return Promise.reject(res.statusText);
    //       }
    //       return res.json();
    //     })
    //     .then((vehicle) => this.setState({ vehicle }));
    // },

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
              <PrivateRoute exact path={"/vehicle-management"} component={AddVehicleForm} />
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
