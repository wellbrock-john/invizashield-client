import React, { Component } from "react";
import Context from "../../Context";
import "./Profile.css";

export default class Profile extends Component {
	static contextType = Context;

	render() {
		const { user } = this.context;

		return (
			<div className="Profile">
				<form
					className="profile-form"
					id="profile-form"
					name="profile-form"
					aria-label="Profile Form"
					onSubmit={(e) => this.context.handleSubmitUser(e)}
				>
					<label htmlFor="first_name">First Name</label>
					<input
						className="profile-form-input"
						id="first_name"
						name="first_name"
						aria-label="First Name"
						type="text"
						defaultValue={user.first_name}
						required
					/>
					<label htmlFor="last_name">Last Name</label>
					<input
						className="profile-form-input"
						id="last_name"
						name="last_name"
						aria-label="Last Name"
						type="text"
						defaultValue={user.last_name}
						required
					/>
					<br />
					<label htmlFor="phone_num">Phone</label>
					<input
						className="profile-form-input"
						id="phone_num"
						name="phone_num"
						aria-label="Phone Number"
						type="tel"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						defaultValue={user.phone_num}
						required
					/>
					<small>Format: 555-555-5555</small>
					<br />
					<label htmlFor="email">Email</label>
					<input
						className="profile-form-input"
						id="email"
						name="email"
						aria-label="Email"
						type="email"
						defaultValue={user.email}
						required
					/>
					<input
						type="submit"
						name="submit"
						value="Save"
						aria-label="Save Button"
					/>
				</form>
			</div>
		);
	}
}
