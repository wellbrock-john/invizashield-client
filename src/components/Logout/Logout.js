import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Context from "../../Context";
import TokenService from "../../services/token-service";
import "./Logout.css";

class Logout extends Component {
  static contextType = Context;

  logout = () => {
    TokenService.clearAuthToken();
    this.context.logout();
    this.props.history.push("/");
  };

  render() {
    return (
      <span className="logout" id="logout">
        <button
          className="logout-btn"
          id="logout-btn"
          name="logout-btn"
          type="submit"
          aria-label="logout-btn"
          onClick={() => this.logout()}
        >
          Logout
        </button>
      </span>
    );
  }
}

export default withRouter(Logout);
