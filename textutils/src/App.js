import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = (cls) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      setInterval(() => {
        document.title = "EngineeringUtils";
      }, 1500);
      setInterval(() => {
        document.title = "Click On About For More Details";
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      setInterval(() => {
        document.title = "EngineeringUtils";
      }, 1500);
      setInterval(() => {
        document.title = "Click On About For More Details";
      }, 2000);
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      alertType: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Router>
        <Navbar
          title="Engineering Utilities"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            ></Route>
            <Route
              exact
              path="/textUtilities"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            ></Route>
            <Route
              exact
              path="/jsonUtilities"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            ></Route>
            <Route
              exact
              path="/devopsUtilities"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            ></Route>
            <Route
              exact
              path="/orderReprocess"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            ></Route>
            <Route
              exact
              path="/insightsUtilities"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            ></Route>
            <Route
              exact
              path="/othersUtilities"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            {/* <Route exact path="/*" element={<About />}></Route> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
