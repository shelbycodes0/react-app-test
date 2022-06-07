import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key="index">
            <p>
              <strong>Definition: </strong>
              {definition.definition}
            </p>
            <Example example={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
            <br />
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
}
