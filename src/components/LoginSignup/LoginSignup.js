import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import AuthAPIService from "../../services/auth-api-service";
import "./LoginSignup.css";

export default class LoginSignup extends Component {

  static contextType = UserContext;

  state = {
    form: "login",
    error: null,
  };
  toggle = {
    login: "register",
    register: "login",
  };

//   handleLoginSuccess = () => {
//       const { location, history } = this.props;
//       const destination = (location.state || {}).from || "/";
//       history.push(destination)
//   }

  onSubmit = async (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      password,
      confirmPassword,
    } = e.target;
    this.setState({ error: null });
    if (this.state.form === "register") {
      if (password.value !== confirmPassword.value) {
        return this.setState({
          error: "Whoops, those passwords do not match. Please try again.",
        });
      }
      try {
        await AuthAPIService.postUser({
          first_name: first_name.value,
          last_name: last_name.value,
          email: email.value,
          password: password.value,
        });
        const { authToken } = await AuthAPIService.postLogin({
          email: email.value,
          password: password.value,
        });

        first_name.value = "";
        last_name.value = "";
        email.value = "";
        password.value = "";

        this.context.processLogin(authToken);
        return this.props.history.push("/");
      } catch ({ error }) {
        return this.setState({ error });
      }
    } else {
      AuthAPIService.postLogin({
        email: email.value,
        password: password.value,
      })
        .then((res) => {
          email.value = "";
          password.value = "";
          this.context.processLogin(res.authToken);
          console.log(this.history);
          return this.props.history.push("/");
        })
        .catch((res) => {
          this.setState({ error: res.error });
        });
    }
  };

  render() {
    return (
      <div className="container">
        <div
          style={{
            transform: `translate(0px, ${
              this.state.form === "login" ? 0 : 110
            }px)`,
          }}
          className="form-div"
        >
          <form onSubmit={this.onSubmit}>
            {this.state.error && <p className="error">{this.state.error}</p>}
            {this.state.form === "login" ? (
              ""
            ) : (
              <input
                placeholder="First Name"
                type="text"
                name="first_name"
                id="first_name"
                aria-label="first_name"
                required
              />
            )}
            {this.state.form === "login" ? (
              ""
            ) : (
              <input
                placeholder="Last Name"
                type="text"
                name="last_name"
                id="last_name"
                aria-label="last_name"
                required
              />
            )}
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              aria-label="email"
              required
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              aria-label="password"
              required
            />
            {this.state.form === "login" ? (
              ""
            ) : (
              <input
                placeholder="Re-type password"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                aria-label="confirmPassword"
                required
              />
            )}
            <button type="submit" className="button-primary">
              Submit
            </button>
          </form>
        </div>
        <div
          style={{
            transform: `translate(0px, ${
              this.state.form === "login" ? 0 : -300
            }px)`,
          }}
          className="button-div"
        >
          <p>
            {this.state.form === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <button
            onClick={() => {
              this.setState({ form: this.toggle[this.state.form] });
            }}
          >
            {this.toggle[this.state.form]}
          </button>
        </div>
      </div>
    );
  }
}
