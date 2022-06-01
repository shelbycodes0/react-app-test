import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  let [keyWord, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyWord(event) {
    setKeyword(event.target.value);
    console.log(keyWord);
  }
  return (
    <div className="App">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word..."
          className="searchbar"
          onChange={handleKeyWord}
        />
        <input type="submit" value="Search" className="searchbtn" />
      </form>
    </div>
  );
}

export default App;
