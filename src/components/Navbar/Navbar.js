import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../../components/images/Logo/InvizaShieldLogoOpaque.png";
import TokenService from "../../services/token-service";
import Logout from "../Logout/Logout";
import { MenuItems } from "../Menu/MenuItems";
import { MenuItemsForNotLoggedIn } from "../Menu/MenuItemsForNotLoggedIn";
import "./Navbar.css";
import Context from "../../Context";

class Navbar extends Component {
	static contextType = Context;

	state = { 
		clicked: false,
		hidden: true,
	};

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	handleNotLoggedInClick = () => {
		const { history } = this.props;
		// eslint-disable-next-line
		if (!TokenService.hasAuthToken() && history.location.pathname == "/") {
			this.setState({ 
				clicked: false,
				hidden: false,
			});
		} else this.setState({ 
			clicked: false,
			hidden: true,
		});
	}

	render() {
		const { user } = this.context;

		return (
			<nav className="NavbarItems">
				<Link id="navbar-logo" className="navbar-logo" to={"/"}>
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
									onClick={() => this.setState({clicked: false})}
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
								<li key={index}
								onClick={() => this.handleNotLoggedInClick()}>
									<a className={item.cName} href={item.url}>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
				)}
				{this.state.hidden === false && <h3 className="hidden-message">Please sign up below to open your InvizaGarage&trade;</h3>}
				{TokenService.hasAuthToken() && <Logout />}
			</nav>
		);
	}
}

export default withRouter(Navbar)