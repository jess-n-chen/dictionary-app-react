import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.data) {
    return (
      <div className="Meaning">
        <h3>{props.data.partOfSpeech}</h3>
        {props.data.definitions.map(function (definition, index) {
          return (
            <div className="mb-5" key={index}>
              <p>
                {definition.definition} <br />
                <em>"{definition.example}"</em>
              </p>
              <h3>Synonyms:</h3>
              <p>
                <Synonyms data={definition.synonyms} />
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
