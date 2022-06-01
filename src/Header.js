import React from "react";

export default function Header() {
  let magicHat = `https://cdn-icons.flaticon.com/png/512/2579/premium/2579236.png?token=exp=1654053428~hmac=a9c20d92453bfc1bf37f6be4a2913c74`;
  return (
    <div className="Header">
      <img src={magicHat} alt="magic hat" />
      <h1>Magic Dictionary</h1>
    </div>
  );
}
