import React, { Component } from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Results from '../Results/Results';
import './App.css';

class App extends Component {
  state = {
    results: [],
    loading: false,
    searched: false,
    error: null
  };

  setResults = nameArray => {
    this.setState({
      results: nameArray,
      loading: false,
      searched: true
    });
  };

  setLoading = () => {
    this.setState({ loading: true });
  };

  setError = error => {
    this.setState({ error });
  };

  render() {
    const { results, loading, searched } = this.state;
    return (
      <>
        <Header />
        <main className="App">
          <Form
            setResults={this.setResults}
            setLoading={this.setLoading}
            setError={this.setError}
          />
          <Results results={results} loading={loading} searched={searched} />
        </main>
      </>
    );
  }
}

export default App;
