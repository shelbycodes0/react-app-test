import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}{" "}
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen{" "}
          <img
            src="https://cdn-icons.flaticon.com/png/512/2823/premium/2823171.png?token=exp=1654306661~hmac=eba945c2cb618ad27f1de8647dad474a"
            width="20px"
            alt="sound icon"
          />
        </a>
      </div>
    );
  } else {
    return null;
  }
}
