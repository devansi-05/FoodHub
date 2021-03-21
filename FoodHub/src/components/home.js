import React from "react";
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./styles.css";

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "2%" }}>
        <i>"One man's trash is another man's treasure"</i>
      </h1>

      <img
        src="https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-1200x628-facebook-1200x628.jpg"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
        }}
      />

      <h2 style={{ marginTop: "2%", textAlign: "center", marginBottom: "1%" }}>
        Our Mission
      </h2>
      <h5
        style={{
          fontWeight: "lighter",
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingBottom: "50px",
          textAlign: "justify",
        }}
      >
        FoodHub is a responsive web application built with the MERN stack that
        allows users to donate excess food and reduce food waste.{" "}
        <b>
          Did you know that roughly one-third of the food produced in the world
          for human consumption every year (approximately 1.3 billion tonnes)
          gets lost or wasted?
        </b>{" "}
        That is perfectly good food that is thrown away due to imperfections in
        shape and colour. Yum aims to change this by allowing both individuals
        and establishments to donate their excess food.
        <br />
        <br />
      </h5>
    </div>
  );
}

export default Home;
