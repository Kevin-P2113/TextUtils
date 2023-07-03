import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [, showAlert] = useOutletContext();

  //event handler function when text area changes
  function changeHandeler(event) {
    setText(event.target.value);
  }
  //function to handle uppercase conversion
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Changed to uppercase!", "success");
  };
  //function to handle lowercase conversion
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Changed to lowercase!", "success");
  };
  //functon to clear the text are
  const handleClearClick = () => {
    setText("");
    showAlert("Text cleared!", "success");
  };
  // function to copy the text in the text area
  const handleCopy = () => {
    let myText = document.getElementById("exampleFormControlTextarea1");
    myText.select();
    myText.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(myText.value);
    showAlert("Text copied!", "success");
  };
  // function to remove extra spaces within the text
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    newText = newText.join(" ");
    setText(newText);
    showAlert("Extra spaces removed!", "success");
  };
  //useState hook for the text within text area
  return (
    <>
      {/* {console.log("this is the value of showalert : " + showAlert)} // checking if showAlert functin is being received  */}
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            placeholder="Enter your text here!"
            onChange={changeHandeler}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2">
        <h1>your text summary</h1>
        <p>
          you have {text.split(" ").filter(Boolean).length} words and{" "}
          {text.split("").length} characters
        </p>
        <p>
          Reading time: {(1 / 125) * text.split(" ").filter(Boolean).length}{" "}
          minute(s)
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here!"}</p>
      </div>
    </>
  );
}

// (/[a-z]|[ ][a-z]/)
