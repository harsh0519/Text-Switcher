import "./App.css";
import Navbar from "./MyComponents/Navbar";
import Textform from "./MyComponents/Textform";
import { useState } from "react";
import Alert from "./MyComponents/Alert";
import About from "./MyComponents/About";
import React from "react";
 import {
   BrowserRouter as Router,
   Route,
   Routes,

} from "react-router-dom";
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
  return (
    <>
      <Router>
        <Navbar
          title="Text Switcher"         
          tooglemode={tooglemode}
          mode={mode}
        ></Navbar>
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<Textform heading="Try Text Switcher:Word Counter-Text Counter"  mode={mode} showalert={showalert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
