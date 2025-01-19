import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./home.css";
import ButtonOne from "../../Components/ButtonOne/ButtonOne";
import ButtonTwo from "../../Components/ButtonTwo/ButtonTwo";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
// import gradimg from "../../assets/grad.svg";

export default function Home() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div data-theme={isDarkMode ? "dark" : "light"} className="home">
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      {/* <img src={gradimg} alt="grad" className="gradi" /> */}
      <div className="heroSection">
        <div className="gradi"></div>
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
          <img src="src/assets/HeroImage.svg" alt="HeroImage" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
