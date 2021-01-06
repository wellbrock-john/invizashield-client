import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../components/Logo/InvizaShield-Logo.jpg";
import TokenService from "../../services/token-service";
import Logout from "../Logout/Logout";
import { MenuItems } from "../Menu/MenuItems";
import "./Navbar.css";

export default class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link id="navbar-logo" className="navbar-logo" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          Menu{" "}
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        {TokenService.hasAuthToken() && <Logout />}
      </nav>
    );
  }
}
