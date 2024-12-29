import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/Sign In/SignIn";
import SignUp from "./Pages/Sign Up/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
