import React, { useEffect } from "react";
import "./home.css";
import ButtonOne from "../../Components/ButtonOne/ButtonOne";
import ButtonTwo from "../../Components/ButtonTwo/ButtonTwo";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <div className="heroSection">
        <div className="leftSide">
          <h1 className="welcome">
            Welcome To <span>Eduverse</span>
          </h1>
          <p>
            EduVerse is your gateway to a world of endless learning
            opportunities. Explore courses, gain skills, and achieve your
            goals—all in one intuitive platform. Start your journey today!
          </p>
          <div className="buttons">
            <Link to={"/choosesignup"}>
              <ButtonOne text="Sign Up" />
            </Link>
            <Link to={"/choosesignin"}>
              <ButtonTwo text="Sign In" />
            </Link>
          </div>
        </div>
        <div className="rightSide">
          <img src="src\assets\HeroImage.svg" alt="HeroImage" />
        </div>
      </div>
      <Footer />
    </>
  );
}
