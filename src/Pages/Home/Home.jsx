import React from "react";
import "./home.css";
import ButtonOne from "../../Components/ButtonOne/ButtonOne";
import ButtonTwo from "../../Components/ButtonTwo/ButtonTwo";

export default function Home() {
  return (
    <div className="heroSection">
      <div className="leftSide">
        <h1 className="welcome">
          Welcome To <span>Eduverse</span>
        </h1>
        <p>
          EduVerse is your gateway to a world of endless learning opportunities.
          Explore courses, gain skills, and achieve your goals—all in one
          intuitive platform. Start your journey today!
        </p>
        <div className="buttons">
          <ButtonOne text="Sign Up" />
          <ButtonTwo text="Sign In" />
        </div>
      </div>
      <div className="rightSide">
        <img src="src\assets\HeroImage.svg" alt="HeroImage" />
      </div>
    </div>
  );
}
