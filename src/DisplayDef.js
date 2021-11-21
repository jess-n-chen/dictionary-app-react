import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function DisplayDef(props) {
  if (props.data) {
    return (
      <div className="displayDef">
        <div>
          <h2>{props.data.word}</h2>
          {props.data.phonetics.map(function (phonetic, index) {
            return <Phonetic data={phonetic} key={index} />;
          })}
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning data={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
