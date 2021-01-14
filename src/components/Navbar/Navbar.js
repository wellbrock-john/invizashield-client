import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../components/images/Logo/InvizaShieldLogoOpaque.png";
import TokenService from "../../services/token-service";
import Logout from "../Logout/Logout";
import { MenuItems } from "../Menu/MenuItems";
import { MenuItemsForNotLoggedIn } from "../Menu/MenuItemsForNotLoggedIn";
import "./Navbar.css";
import Context from "../../Context";

export default class Navbar extends Component {
	static contextType = Context;

	state = { clicked: false };

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	render() {
		const { user } = this.context;

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
				{user && user.id ? (
					<ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
						{MenuItems.map((item, index) => {
							return (
								<li
									key={index}
									onClick={() => this.setState({ clicked: false })}
								>
									<a className={item.cName} href={item.url}>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
				) : (
					<ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
						{MenuItemsForNotLoggedIn.map((item, index) => {
							return (
								<li key={index}>
									<a className={item.cName} href={item.url}>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
				)}
				{TokenService.hasAuthToken() && <Logout />}
			</nav>
		);
	}
}
