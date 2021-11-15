import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [term, setTerm] = useState("");

  function formSubmit(event) {
    event.preventDefault();
    dictionarySearch();
  }

  function updateTerm(event) {
    setTerm(event.target.value);
  }

  function dictionarySearch(event) {
    alert(`Searching for ${term}`);
  }

  let searchForm = (
    <div className="row search-bar-container">
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
    </div>
  );
}
