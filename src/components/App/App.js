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
    error: null,
    confirmation: false,
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
            throw new Error("Something went wrong, please try again later.");
          }
          return res.json();
        })
        .then((user) => this.setState({ user }));

      fetch(`${Config.API_ENDPOINT}/vehicles`, options)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Something went wrong, please try again later.");
          }
          return res.json();
        })
        .then((vehicles) => this.setState({ vehicles }));
    },

    handleSubmitUser: (e) => {
      e.preventDefault();
      const { id } = this.state.user;
      const { first_name, last_name, phone_num, email } = e.target;
      const user = {
        first_name: first_name.value,
        last_name: last_name.value,
        phone_num: phone_num.value,
        email: email.value,
      };
      AuthApiService.putUser(user, id);
    },

    handleSubmitVehicle: (e, id) => {
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
      this.setState({ error: null });
      if (e.target.id === "vm-edit-form") {
        AuthApiService.putVehicle(vehicle, id);
      } else {
        AuthApiService.postVehicle(vehicle);
      }
    },

    setVehiclesAfterDelete: (id) => {
      return this.setState({
        vehicles: this.state.vehicles.filter((vehicle) => vehicle.id !== id),
      });
    },

    logout: () => {
      this.setState({
        user: {},
        vehicles: [],
      });
    },
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    // only calling the getData function after the user has logged in to avoid unnecessary and potentially problematic api calls
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
              <PrivateRoute
                exact
                path={"/vehicle-management"}
                component={AddVehicleForm}
              />
              <PrivateRoute
                path={"/vehicle-management/:id"}
                component={VehicleManagementRoute}
              />

              {/* We specifically want these routes to be accessible to the public */}
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
