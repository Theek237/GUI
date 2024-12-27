import { useState } from "react";
import Home from "./Pages/Home/Home";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Choose from "./Pages/Choose Role/Choose";

function App() {
  return (
    <>
      <Header />
      <Choose />
      <Footer />
    </>
  );
}

export default App;
