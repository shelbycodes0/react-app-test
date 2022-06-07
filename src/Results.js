import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="firstGroup">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key="index">
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        <br />
        <br />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
              <br />
              <br />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
