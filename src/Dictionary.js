import React, { useState } from "react";
import axios from "axios";
import DisplayDef from "./DisplayDef";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState(null);

  function storeDefResponse(response) {
    setDefinition(response.data[0]);
  }

  function formSubmit(event) {
    event.preventDefault();
    dictionarySearch(event);
  }

  function updateTerm(event) {
    setTerm(event.target.value);
  }

  function dictionarySearch(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${term}`;
    axios.get(apiURL).then(storeDefResponse);
  }

  let searchForm = (
    <div className="row search-bar-container mb-5">
      <form className="search-term-form" onSubmit={formSubmit}>
        <input
          className="form-control"
          id="term-input"
          type="search"
          placeholder="Search for a word"
          onChange={updateTerm}
        />
      </form>
    </div>
  );
  return (
    <div className="main-container">
      <h1 className="mb-5">👩‍💻 Dictionary</h1>
      {searchForm}
      <DisplayDef data={definition} />
    </div>
  );
}
