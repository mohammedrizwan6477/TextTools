import React, { useState } from "react";
import { saveAs } from "file-saver";
import { Button } from "react-bootstrap";
const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpperclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase!", "success");
  };
  const handleTrim = () => {
    let newText = text.trim();
    setText(newText);
    props.showAlert("Remove Unneccesary Spaces!", "success");
  };
  const handleLowerclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase!", "success");
  };
  const handlesentenceCase = () => {
    let newText = text[0].toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("Converted to sentenceCase!", "success");
  };
  const handleDownloadingtext = () => {
    const fileText = text;
    const fileBlob = new Blob([fileText], { type: "text/plain" });
    const fileUrl = URL.createObjectURL(fileBlob);
    saveAs(fileUrl);
  };
  const handleRemove = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleOnchange = (e) => {
    setText(e.target.value);
  };
  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join("   "));
    props.showAlert("remove extra spaces!", "success");
  };
  return (
    <>
      <div
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
          backgroundColor: props.mode === "dark" ? "gray" : "white",
        }}
        className="container my-3"
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <Button
          className="btn btn-primary mx-1"
          style={{ marginTop: "15px" }}
          onClick={handleUpperclick}
        >
          Convert to UpperCase
        </Button>
        <Button
          className="btn btn-primary mx-1"
          style={{ marginTop: "15px" }}
          onClick={handleTrim}
        >
          Remove Unneccesary Space with Trim
        </Button>
        <Button
          className="btn btn-primary mx-1"
          style={{ marginTop: "15px" }}
          onClick={handleLowerclick}
        >
          Convert to LowerCase
        </Button>
        <Button
          className="btn btn-primary mx-1"
          style={{ marginTop: "15px" }}
          onClick={handlesentenceCase}
        >
          Sentence Case
        </Button>
        <Button
          className="btn btn-primary mx-1"
          style={{ marginTop: "15px" }}
          onClick={handleDownloadingtext}
        >
          Downlod Text
        </Button>
        <Button
          className="btn btn-primary mx-1"
          style={{ marginTop: "15px" }}
          onClick={handleCopy}
        >
          Copy Text
        </Button>
        <Button
          className="btn btn-primary mx-1"
          style={{ marginTop: "15px" }}
          onClick={handleRemove}
        >
          Clear Text
        </Button>
        <Button
          className="btn btn-primary mx-1"
          style={{ marginTop: "15px" }}
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </Button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text
              .trim()
              .split(" ")
              .filter((word) => word !== "").length
          }{" "}
          words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
};

export default TextForm;
