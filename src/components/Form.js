import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const QUERY = e.target.search.value;
    const BASE_URL = 'https://swapi.co/api/people/?search=';
    const FINAL_URL = BASE_URL + QUERY;
    fetch(FINAL_URL)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(obj => obj.results)
      .then(array => array.map(person => person.name))
      .then(mapped => this.props.setResults(mapped));
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label htmlFor="search">Enter a name:</label>
        <input type="text" id="search" name="search" placeholder="Skywalker" />
      </form>
    );
  }
}

export default Form;
