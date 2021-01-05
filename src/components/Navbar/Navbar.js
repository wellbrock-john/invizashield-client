import React, { Component } from "react";
import { MenuItems } from "../Menu/MenuItems";
import logo from "../../components/Logo/InvizaShield-Logo.jpg";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
	state = { clicked: false };

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	render() {
		return (
			<nav className="NavbarItems">
				<Link id="navbar-logo" className="navbar-logo" to="/landing">
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
			</nav>
		);
	}
}
