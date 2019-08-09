import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';

import './App.css';

class App extends Component {
  state = {
    results: []
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
