import React from "react";
import { useOutletContext } from "react-router-dom";

export default function About(props) {
  const [mode] = useOutletContext();
  //style to use for light mode
  let lightStyle = {
    backgroundColor: "white",
    color: "black",
  };
  // style to use for dark mode
  let darkStyle = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <>
      {/* {console.log(mode)} // to test if the mode parameter is being passed or not */}
      <div
        className="container"
        style={mode == "light" ? lightStyle : darkStyle}
      >
        <h1 className="my-3"><strong>About</strong></h1>
        <div
          className="accordion"
          id="accordionExample"
          style={mode == "light" ? lightStyle : darkStyle}
        >
          <div
            className="accordion-item"
            style={mode == "light" ? lightStyle : darkStyle}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mode == "light" ? lightStyle : darkStyle}
              >
                <strong>About me</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Hello! My name is Kevin Pereira, and I'm a computer science
                engineer with a passion for building innovative applications.
                Welcome to my project website, where I showcase my TextUtils
                project and share my love for coding.
              </div>
            </div>
             
          </div>
          <div
            className="accordion-item"
            style={mode === "light" ? lightStyle : darkStyle}
          >
            <h2
              className="accordion-header"
              style={mode === "light" ? lightStyle : darkStyle}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={mode === "light" ? lightStyle : darkStyle}
              >
                <strong>Text Manipulation App</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The text manipulation app you're currently exploring is one of
                my recent projects. Developed using React and Vite, this app
                offers a simple yet powerful way to manipulate text
                effortlessly.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={mode === "light" ? lightStyle : darkStyle}
          >
            <h2
              className="accordion-header"
              style={mode === "light" ? lightStyle : darkStyle}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={mode === "light" ? lightStyle : darkStyle}
              >
                <strong>Features</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                With this app, you can easily capitalize or make text lowercase,
                remove extra spaces, and copy the manipulated text to your
                clipboard with just a few clicks. Additionally, you have the
                option to clear the text area, ensuring a clean and seamless
                user experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
