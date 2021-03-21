import React, { Component } from "react";

const Footer = () => {
  return (
    <div>
      <footer class="page-footer font-small mdb-color pt-4 mt-3">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left mt-3 pb-3">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">About Us</h6>
              <p>About FoodHub</p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Become a Donar</a>
              </p>
              <p>
                <a href="#!">Login</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i class="fas fa-home mr-3"></i> Guwahati
              </p>
              <p>
                <i class="fas fa-envelope mr-3"></i> support@foodhub.com
              </p>
              <p>
                <i class="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i class="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>

          <hr />

          <div class="row d-flex align-items-center">
            <div class="col-md-7 col-lg-8">
              <p class="text-center text-md-left">
                © 2021 Copyright:
                <a href="#">
                  <strong> FoodHub</strong>
                </a>
              </p>
            </div>

            <div class="col-md-5 col-lg-4 ml-lg-0">
              <div class="text-center text-md-right social">
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item">
                    <a class="btn-floating btn-sm rgba-white-slight mx-1">
                      <i class="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn-floating btn-sm rgba-white-slight mx-1">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn-floating btn-sm rgba-white-slight mx-1">
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn-floating btn-sm rgba-white-slight mx-1">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
