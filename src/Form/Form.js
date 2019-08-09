import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    error: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const QUERY = e.target.search.value;
    const RESOURCE = e.target.resource.value;
    const BASE_URL = `https://swapi.co/api/${RESOURCE}/?search=`;
    const FINAL_URL = BASE_URL + QUERY;
    this.props.setLoading();

    fetch(FINAL_URL)
      .then(res =>
        res.ok ? res.json() : Promise.reject('Something went wrong')
      )
      .then(data =>
        data.results.map(item => {
          if (RESOURCE === 'films') {
            return item.title;
          } else {
            return item.name;
          }
        })
      )
      .then(mapped => this.props.setResults(mapped))
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    if (this.state.error) {
      throw new Error('API Error!');
    }
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label htmlFor="search">
          Enter a
          <select id="resource" name="resource">
            <option value="people">Character</option>
            <option value="planets">Planet</option>
            <option value="starships">Spaceship</option>
            <option value="vehicles">Vehicle</option>
            <option value="films">Film</option>
            <option value="species">Species</option>
          </select>
          to search for:
        </label>
        <input type="text" id="search" name="search" placeholder="Skywalker" />
        <button type="submit">Use the Search, Luke!</button>
      </form>
    );
  }
}

export default Form;
