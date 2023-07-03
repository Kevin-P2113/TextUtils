import { useState } from "react";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import { Outlet } from "react-router-dom";

function App() {
  //mode variable for setting and applying light or dark mode within the app
  const [mode, setMode] = useState("light");
  // show alert variable for getting and setting alerts for user actions
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  // function that switches the styles based on the mode of the app
  const switchMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode had been enabled!", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled!", "success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={switchMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-5">
        <Outlet context={[mode, showAlert]}></Outlet>
      </div>
    </>
  );
}

export default App;
