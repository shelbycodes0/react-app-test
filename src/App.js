import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <input
          type="search"
          placeholder="Search for a word..."
          className="searchbar"
        />
        <input type="submit" value="Search" className="searchbtn" />
      </form>
    </div>
  );
}

export default App;
