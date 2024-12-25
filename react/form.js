import React, { Component } from "react";
import "./App.css";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", this.state);
    alert("Registration Successful");
  };

  render() {
    return (
      <div className="form-container">
        <form className="form-wrapper" onSubmit={this.handleSubmit}>
          <h2 className="form-title">Registration Form</h2>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="form-button">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
