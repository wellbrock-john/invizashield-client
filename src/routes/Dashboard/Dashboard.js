import React, { Component } from "react";
import Account from "../../components/Account/Account";
import Profile from "../../components/Profile/Profile";
import Schedule from "../../components/Schedule/Schedule";
import Context from "../../Context";
import TokenService from "../../services/token-service";
import "./Dashboard.css";

export default class Dashboard extends Component {
	static contextType = Context;

	state = {
		accountClicked: true,
		scheduleClicked: false,
		profileClicked: false,
		error: null,
	};

	static contextType = Context;

	componentDidMount() {
		if (TokenService.hasAuthToken()) {
			this.context.getData();
		}
	}

	handleAccountClicked = (e) => {
		e.preventDefault();
		this.setState({
			accountClicked: true,
			scheduleClicked: false,
			profileClicked: false,
		});
	};

	handleScheduleClicked = (e) => {
		e.preventDefault();
		this.setState({
			accountClicked: false,
			scheduleClicked: true,
			profileClicked: false,
		});
	};

	handleProfileClicked = (e) => {
		e.preventDefault();
		this.setState({
			accountClicked: false,
			scheduleClicked: false,
			profileClicked: true,
		});
	};

	render() {
		const user = this.context.user || {};

		return (
			<>
				{user && user.id ? (
					<section id="container">
						<div className="sidebar">
							<ul className="dashboard-ul">
								<li>
									<button
										className="dash-li-btn"
										id="account-btn"
										name="account-btn"
										type="button"
										onClick={this.handleAccountClicked}
									>
										Garage
									</button>
								</li>
								<li>
									<button
										className="dash-li-btn"
										id="schedule-btn"
										name="schedule-btn"
										type="button"
										onClick={this.handleScheduleClicked}
									>
										Schedule
									</button>
								</li>
								<li>
									<button
										className="dash-li-btn"
										id="profile-btn"
										name="profile-btn"
										type="button"
										onClick={this.handleProfileClicked}
									>
										Profile
									</button>
								</li>
							</ul>
						</div>
						<div className="dashboard-main">
							{this.state.scheduleClicked ? (
								<Schedule />
							) : this.state.profileClicked ? (
								<Profile />
							) : (
								<Account />
							)}
						</div>
					</section>
				) : (
					<h2>Loading Your Account</h2>
				)}
			</>
		);
	}
}
