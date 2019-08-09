import React, { Component } from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Results from '../Results/Results';
import './App.css';

class App extends Component {
  state = {
    results: [],
    noResults: null
  };

  setResults = nameArray => {
    this.setState({ results: nameArray });
  };

  render() {
    return (
      <>
        <Header />
        <main className="App">
          <Form setResults={this.setResults} />
          <Results results={this.state.results} />
        </main>
      </>
    );
  }
}

export default App;
