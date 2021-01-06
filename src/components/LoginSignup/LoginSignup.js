import React, { Component } from "react";
import { withRouter } from "react-router";
import AuthAPIService from "../../services/auth-api-service";
import Context from "../../Context";
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
			password,
			confirmPassword,
		} = e.target;
		const { history } = this.props;
		this.setState({ error: null });
		if (this.state.form === "register") {
			if (password.value !== confirmPassword.value) {
				return this.setState({
					error: "Whoops, those passwords do not match. Please try again.",
				});
			}

			const userR = {
				first_name: first_name.value,
				last_name: last_name.value,
				email: email.value,
				password: password.value,
			};
			const user = { email: email.value, password: password.value };
			try {
				await AuthAPIService.postUser(userR).then((response) => {
					TokenService.saveAuthToken(response.authToken);
				});
				await AuthAPIService.postLogin(user)
					.then((response) => {
						TokenService.saveAuthToken(response.authToken);
					});

				first_name.value = "";
				last_name.value = "";
				email.value = "";
				password.value = "";

				history.push("/dashboard");
				this.context.refreshPage();
			} catch ({ error }) {
				return this.setState({ error });
			}
		} else {
			const user = { email: email.value, password: password.value };
			AuthAPIService.postLogin(user)
				.then((response) => {
					TokenService.saveAuthToken(response.authToken);
					history.push("/dashboard");
					this.context.refreshPage();
				})
				.catch((res) => {
					email.value = "";
					password.value = "";
					this.setState({ error: res.error });
				});
		};
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

export default withRouter(LoginSignup);
