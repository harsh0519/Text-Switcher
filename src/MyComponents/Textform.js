import React, { useState } from "react";

export default function Textform(props) {
  const handelupclick = () => {
    //console.log("ENTERED TEXT -" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to upper case ", "success");
  };
  const handellowclick = () => {
    //console.log("ENTERED TEXT -" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to lower case ", "success");
  };
  const handelClearclick = () => {
    //console.log("ENTERED TEXT -" + text);
    //let newtext = text.toLowerCase();
    setText("");
    props.showalert("Text Cleared ", "success");
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const handlecopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges()
    props.showalert("Copied Successfully!!!!! ", "success");
  };
  const handleextraspace = () => {
    let ntext = text.split(/[ ]+/);
    setText(ntext.join(" "));
    props.showalert("Extra Spaces Removed ", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1
          className="mb-4"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          {props.heading}
        </h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="mybox"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "gray",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleonchange}
            value={text}
          ></textarea>
          <br />
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-1"
            onClick={handelupclick}
          >
            Convert to Upper Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-1"
            onClick={handellowclick}
          >
            Convert to Lower Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-1"
            onClick={handelClearclick}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-1"
            onClick={handlecopy}
          >
            Copy
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-1"
            onClick={handleextraspace}
          >
            Extra Space Remover
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary </h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
          Words And {text.length} Letters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes will be used to read
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
