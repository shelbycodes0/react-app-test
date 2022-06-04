import React from "react";
import Sound from "./Sound";

import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}{" "}
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen <Sound />
        </a>
      </div>
    );
  } else {
    return null;
  }
}
