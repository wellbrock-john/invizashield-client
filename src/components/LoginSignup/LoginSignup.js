import React, { Component } from "react";
import "./LoginSignup.css";

export default class LoginSignup extends Component {
    state = { form: 'login' };
    toggle = {
        login: 'register',
        register: 'login'
      };
      
      onSubmit = (e) => {
        e.preventDefault();
      }
    
      render() {    
        return (
          <div className="container">
            <div style={{transform: `translate(0px, ${this.state.form === 'login' ? 0 : 160}px)`}} className="form-div">
              <form onSubmit={this.onSubmit.bind(this)}>
                <input placeholder="Email" type="text" />
                <input placeholder="Password" type="password" />
                {this.state.form === 'login' ? '': <input placeholder="Re-type password" type="password" />}
                <button className="button-primary">Submit</button>
              </form>
            </div>
            <div style={{transform: `translate(0px, ${this.state.form === 'login' ? 0 : -240}px)`}} className="button-div">
              <p>{this.state.form === 'login' ? "Don't have an account?" : 'Already a member?'}</p>
              <button onClick={() => {this.setState({form: this.toggle[this.state.form]})}}>{this.toggle[this.state.form]}</button>
            </div>
          </div>
        );
      }
}
