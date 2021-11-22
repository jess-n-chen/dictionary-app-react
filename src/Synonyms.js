import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.data && props.data.length) {
    return (
      <div className="Synonyms mb-3">
        <p>
          <strong className="ms-3">Synonyms:</strong>
        </p>
        <ul className="ms-3">
          {props.data.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
