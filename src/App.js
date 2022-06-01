import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import Results from "./Results";

function App() {
  let [keyWord, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
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
      <div className="SearchBar">
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
      <Results results={results} />
    </div>
  );
}

export default App;
