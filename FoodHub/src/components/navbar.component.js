import React, { Component } from "react";
import { Link } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import ListingForm from "./listingform.component";
import jwt_decode from "jwt-decode";
import "./styles.css";

function LogOut(props) {
  localStorage.removeItem("jwt");
  window.location = `/listings`;
}

function UserGreeting(props) {
  return (
    <>
      <li>
        <Link to="/listings">View</Link>
      </li>
      <li>
        <Link to="/my_listings" params={localStorage.getItem("jwt")}>
          My items
        </Link>
      </li>

      <li>
        <Popup
          trigger={
            <div
              style={{ cursor: "pointer" }}
              className="nav-link font-weight-bold"
            >
              {" "}
              <i class="large material-icons">file_upload</i>
            </div>
          }
          modal
          position="center"
        >
          <div>
            <ListingForm />
          </div>
        </Popup>
      </li>
      <li>
        <Link to="/chat" params={localStorage.getItem("jwt")}>
          <i class="large material-icons">chat</i>
        </Link>
      </li>
      <li>{jwt_decode(localStorage.getItem("jwt")).name}</li>
      <li>
        <Link to="/listings" onClick={LogOut}>
          <i class="large material-icons">power_settings_new</i>
        </Link>
      </li>
    </>
  );
}

function GuestGreeting(props) {
  return (
    <>
      <li>
        <Link to="/listings">View</Link>
      </li>

      <li>
        <Link to="/users/add">Register</Link>
      </li>

      <li>
        <Link to="/users/login">Login</Link>
      </li>
    </>
  );
}

function Greeting(props) {
  if (
    localStorage.getItem("jwt") &&
    jwt_decode(localStorage.getItem("jwt")).name
  ) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default class Navbar extends Component {
  render() {
    return (
      <div class="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <Link to="/home" className="brand-logo left">
              Foodhub
            </Link>

            <ul id="nav-mobile" className="right">
              <Greeting />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
