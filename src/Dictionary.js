import React, { useState } from "react";
import axios from "axios";
import DisplayDef from "./DisplayDef";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [term, setTerm] = useState(props.defaultWord);
  const [loaded, setLoaded] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState([]);

  function searchImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setDefinition(response.data[0]);

    let apiURL = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
    let apiKey = "563492ad6f917000010000014a4078a4f8b545fda3f3c33d260ab9d0";
    axios
      .get(apiURL, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(searchImages);
  }

  function formSubmit(event) {
    event.preventDefault();
    dictionarySearch(event);
  }

  function updateTerm(event) {
    setTerm(event.target.value);
  }

  function load() {
    setLoaded(true);
    dictionarySearch();
  }

  function dictionarySearch(event) {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${term}`;
    axios.get(apiURL).then(handleResponse);
  }

  let searchForm = (
    <div className="row search-bar-container mb-5">
      <form className="search-term-form" onSubmit={formSubmit}>
        <input
          className="form-control"
          defaultValue={props.defaultWord}
          id="term-input"
          type="search"
          placeholder="Search for a word"
          onChange={updateTerm}
        />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div className="main-container">
        <h1 className="mb-5">👩‍💻 Dictionary</h1>
        {searchForm}
        <DisplayDef data={definition} />
        <Photos data={photos} />
      </div>
    );
  } else {
    load();
    return "Loading!";
  }
}
