import React, { Component } from "react";
import { withRouter } from "react-router";
import Context from "../../Context";
import AuthAPIService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import "./LoginSignup.css";

class LoginSignup extends Component {
	static contextType = Context;

	state = {
		form: "login",
		error: null,
	};
	toggle = {
		login: "register",
		register: "login",
	};

	onSubmit = async (e) => {
		e.preventDefault();
		const {
			first_name,
			last_name,
			email,
			phone_num,
			password,
			confirmPassword,
		} = e.target;
		const { history } = this.props;
		this.setState({ error: null });
		if (this.state.form === "register") {
			if (password.value !== confirmPassword.value) {
				first_name.value = "";
				last_name.value = "";
				email.value = "";
				phone_num.value = "";
				password.value = "";
				confirmPassword.value = "";
				return this.setState({
					error: "Whoops, those passwords do not match. Please try again.",
				});
			}

			const userR = {
				first_name: first_name.value,
				last_name: last_name.value,
				email: email.value,
				phone_num: phone_num.value,
				password: password.value,
			};
			const user = { email: email.value, password: password.value };
			try {
				await AuthAPIService.postUser(userR);
				await AuthAPIService.postLogin(user)
					.then((response) => {
						TokenService.saveAuthToken(response.authToken);
					})
					.then(() => {
						history.push("/dashboard");
					});
			} catch ({ error }) {
				first_name.value = "";
				last_name.value = "";
				email.value = "";
				phone_num.value = "";
				password.value = "";
				confirmPassword.value = "";
				return this.setState({ error });
			}
		} else {
			const user = { email: email.value, password: password.value };
			AuthAPIService.postLogin(user)
				.then((response) => {
					TokenService.saveAuthToken(response.authToken);
				})
				.then(() => {
					history.push("/dashboard");
				})
				.catch((res) => {
					email.value = "";
					password.value = "";
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
						{this.state.form === "login" ? (
							""
						) : (
							<input
								placeholder="First Name"
								type="text"
								name="first_name"
								id="first_name"
								aria-label="First Name"
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
								aria-label="Last Name"
								required
							/>
						)}
						{this.state.form === "login" ? (
							""
						) : (
							<input
								placeholder="Phone: 555-555-5555"
								type="tel"
								pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
								name="phone_num"
								id="phone_num"
								aria-label="Phone Number"
								required
							/>
						)}
						<input
							placeholder="Email"
							type="email"
							name="email"
							id="email"
							aria-label="Email"
							required
						/>
						<input
							placeholder="Password"
							type="password"
							name="password"
							id="password"
							aria-label="Password"
							required
						/>
						{this.state.form === "login" ? (
							""
						) : (
							<input
								placeholder="Confirm Password"
								type="password"
								name="confirmPassword"
								id="confirmPassword"
								aria-label="Confirm Password"
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

export default withRouter(LoginSignup);
