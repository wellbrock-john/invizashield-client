import React, { useState } from "react";
import Config from "../../../config";
import "./ContactForm.css";

const ContactForm = () => {
	const [status, setStatus] = useState("Submit");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");
		const { name, email, message } = e.target.elements;
		let details = {
			name: name.value,
			email: email.value,
			message: message.value,
		};
		let response = await fetch(`${Config.API_ENDPOINT}/contact`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(details),
		});
		setStatus("Submit");
		let result = await response.json();
		alert(result.status);
	};
	return (
		<form className="contact-form" onSubmit={handleSubmit}>
			<label htmlFor="name">Name:</label>
			<input type="text" id="name" required />

			<label htmlFor="email">Email:</label>
			<input type="email" id="email" required />

			<label htmlFor="message">Message:</label>
			<textarea id="message" required />

			<button className="submit-email" type="submit">
				{status}
			</button>
		</form>
	);
};

export default ContactForm;
