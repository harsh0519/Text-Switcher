import "./App.css";
import Navbar from "./MyComponents/Navbar";
import Textform from "./MyComponents/Textform";
import { useState } from "react";
import Alert from "./MyComponents/Alert";
// import About from "./MyComponents/About";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,

// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const tooglemode = () => {
    if (mode === "light" || mode === "primary" || mode === "success") {
      setmode("dark");
      document.body.style.backgroundColor = "gray";
      showalert("Dark  Mode Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode Enabled", "success");
    }
  };
  const tooglemode1 = () => {
    if (mode === "light" || mode === "dark" || mode === "success") {
      setmode("primary");
      document.body.style.backgroundColor = "darkblue";
      showalert("Bluish  Mode Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Text Switcher"         
          tooglemode={tooglemode}
          tooglemode1={tooglemode1}
          mode={mode}
        ></Navbar>
        <Alert alert={alert} />
        <div className="container my-3">
        <Textform heading="Enter text to analyze"  mode={mode} showAlert={Alert} />
        {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={}>
            </Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
