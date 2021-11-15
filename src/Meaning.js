import React from "react";

export default function Meaning(props) {
  if (props.data) {
    return (
      <div className="Meaning">
        <h3>{props.data.partOfSpeech}</h3>
        {props.data.definitions.map(function (definition, index) {
          return (
            <div className="mb-5" key={index}>
              <p>{definition.definition}</p>
              <p>{definition.example}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
