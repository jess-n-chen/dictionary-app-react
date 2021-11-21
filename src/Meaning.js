import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

import "./Meaning.css";

export default function Meaning(props) {
  if (props.data) {
    return (
      <div className="meaningCard">
        <span className="partOfSpeech">{props.data.partOfSpeech}:</span>
        {props.data.definitions.map(function (definition, index) {
          return (
            <div className="pb-3" key={index}>
              <p>
                <span className="definition">→ {definition.definition}</span>
              </p>
              <Example data={definition.example} />
              <Synonyms data={definition.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
