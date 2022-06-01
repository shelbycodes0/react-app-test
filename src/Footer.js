import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <img
          src="https://cdn-icons-png.flaticon.com/512/867/867912.png"
          alt="magic wand"
        />{" "}
        This app was built by{" "}
        <a
          href="https://github.com/shelbycodes0"
          target="_blank"
          rel="noreferrer"
        >
          ShelbyCodes
        </a>
      </footer>
    </div>
  );
}
