import React, { Component } from "react";
import ContactForm from "../../components/Forms/Contact/ContactForm";
import Context from "../../Context";
import "./ContactRoute.css";

export default class ContactRoute extends Component {
	static contextType = Context;
	render() {
		const { user } = this.context;
		return (
			<section className="Contact" id="Route">
				{user && user.id ? (
					<h2 className="greeting">Hey {user.first_name},</h2>
				) : (
					<h2 className="greeting">Looking to protect your investment?</h2>
				)}
				{user && user.id ? (
					<h4 className="contact-body">
						If you need to reach us, you can send a quick and easy email down
						below or you can call or text John at
						<div>
							<a href="tel:+1-513-703-4235">+1 (513) 703-4235</a>
						</div>
					</h4>
				) : (
					<h4 className="contact-body">
						<i className="fas fa-share"> {" "}Fill out a free quote request on our services page</i>
						<br />
						
						<br />
						<i className="fas fa-share">{" "}Send us an email below</i>
						<br />
						
						<br />
						<i className="fas fa-share">{" "}Call the owner, John Wellbrock, at</i>
						<div>
							<a href="tel:+1-513-703-4235">+1 (513) 703-4235</a>
						</div>
					</h4>
				)}
				<section>
					<div className="contact-form-div">
						<ContactForm />
					</div>
				</section>
			</section>
		);
	}
}
