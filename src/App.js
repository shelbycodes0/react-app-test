import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { BallTriangle } from "react-loader-spinner";

import Results from "./Results";
import Photos from "./Photos";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  let [keyWord, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000105ffbe44a35742e89164fdfe62254ad1";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=4`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeyWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="App">
      <span className="loader">
        <BallTriangle
          height="100"
          width="100"
          color="#5FD9B3"
          ariaLabel="loading"
        />
      </span>
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
      <Photos photos={photos} />
    </div>
  );
}

export default App;
