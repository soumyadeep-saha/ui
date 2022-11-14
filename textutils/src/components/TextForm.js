import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");
  const handleUpClick = () => {
    const upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Converted To Uppercase", "success");
  };
  const handleLowClick = () => {
    const upText = text.toLowerCase();
    setText(upText);
    props.showAlert("Converted To Lowercase", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Is Cleared", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleReverseClick = () => {
    const newTextArr = text.split("");
    const reverseArr = newTextArr.reverse();
    const newText = reverseArr.join("");
    setText(newText);
    props.showAlert("Reverted The Text", "success");
  };
  const handleExtraSpacesClick = () => {
    let wordsArray = text.split(" ");
    let newText = "";
    wordsArray.forEach((elem) => {
      if (elem[0] !== undefined) {
        newText = newText + elem + " ";
      }
    });
    setText(newText);
    props.showAlert("Extra Spaces Are Cleared", "success");
  };
  const handleSpeakTextClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Loud Spoken The Words", "success");
  };
  const handleCopy = () => {
    // let text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied The Text", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="my-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#14468e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleReverseClick}
        >
          Reverse Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpacesClick}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-2"
          onClick={handleSpeakTextClick}
        >
          Speak Given Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "No Text To Analyze"}</p>
      </div>
    </>
  );
}
