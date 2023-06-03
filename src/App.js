import React, { useState } from "react";
import "./style.css";
import NavbarT from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { AlertT } from "./Components/AlertT";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      document.title = "TextTools - Dark Mode";
      setInterval(() => {
        document.title = "Install TextTools Now";
      }, 1000);
      setInterval(() => {
        document.title = "TextTools is Amazing Now";
      }, 2000);
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextTools - Light Mode";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <NavbarT
        title="TextTools"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <AlertT alert={alert} />
      <TextForm
        heading="Enter the text to analyze below"
        showAlert={showAlert}
        mode={mode}
      />
      {/* <Routes> */}
      {/* <Route
            path="/"
            element={
              
            } */}
      {/* /> */}
      {/* <Route
            path="/home"
            element={
              <TextForm
                heading="Enter the text to analyze below"
                showAlert={showAlert}
                mode={mode}
              />
            }
          /> */}
      {/* <Route path="/about" element={<About aboutMode={mode} />} /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}
