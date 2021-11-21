import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <ul className="Synonyms">
        {props.data.map(function (synonym, index) {
          return (
            <li className="me-2" key={index}>
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
