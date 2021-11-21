import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.data) {
    return (
      <p className="Phonetic ms-2 mb-3">
        <a href={props.data.audio} target="_blank" rel="noopener noreferrer">
            🔊
        </a>{" "}
        <span>{props.data.text}</span>
      </p>
    );
  } else {
    return null;
  }
}
