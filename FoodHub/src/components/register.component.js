import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    //State of Fields When Page First Loads
    this.state = {
      name: "",
      email: "",
      password: "",
      resMessage: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  async onSubmit(e) {
    e.preventDefault();

    //Create user object with all the neccesary fields
    const user = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
    };
    console.log("User " + user + " added");

    const res = await axios({
      method: "post",
      url: "http://localhost:8000/users/add",
      validateStatus: null,
      data: user,
    });
    if (res.status === 200) {
      localStorage.setItem("jwt", res.data.jwt);
      this.setState({ resMessage: JSON.stringify(res.status) });
    } else {
      console.log(`Registration error: ${JSON.stringify(res.data)}`);
      this.setState({ resMessage: JSON.stringify(res.status) });
      console.log(this.state.resMessage);
    }

    //Reset Fields
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Register</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              placeholder="Email"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              placeholder="Password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          {this.state.resMessage == 404 && (
            <h3 className="error"> Complete all the fields! </h3>
          )}
          {this.state.resMessage == 422 && (
            <h3 className="error"> Email already registered! </h3>
          )}
          {this.state.resMessage == 400 && (
            <h3 className="error"> Username already registered! </h3>
          )}
          {this.state.resMessage == 200 && (
            <h3 className="error"> Success! </h3>
          )}

          <div className="form-group">
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
              value="Register"
            >
              Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
