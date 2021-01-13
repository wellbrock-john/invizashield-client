import React, { Component } from "react";
import ContactForm from "../../components/Forms/Contact/ContactForm";
import Context from "../../Context";
import "./ContactRoute.css";

export default class ContactRoute extends Component {
  static contextType = Context;
  render() {
    const { user } = this.context;
    return (
      <div className="Contact">
        {user && user.id ? (
          <h1 className="greeting">Hey {user.first_name},</h1>
        ) : (
          <h1 className="greeting">Looking to protect your investment?</h1>
        )}
        {user && user.id ? (
          <h4 className="contact-body">
            If you need to reach us, you can send a quick and easy email down
            below or you can call or text John at
            <div>
              <a href="tel:+1-513-703-4235">+1 (513) 703-4196</a>
            </div>
          </h4>
        ) : (
          <h4 className="contact-body">
            You can fill out a free quote request from our home page
            <br />
            Or
            <br />
            Send us an email below
            <br />
            Or
            <br />
            Call the owner, John Wellbrock, at
            <div>
              <a href="tel:+1-513-703-4235">+1 (513) 703-4196</a>
            </div>
          </h4>
        )}
        <section>
            <div>
                <ContactForm />
            </div>
        </section>
      </div>
    );
  }
}
