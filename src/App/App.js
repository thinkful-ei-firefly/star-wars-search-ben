import React, { Component } from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Results from '../Results/Results';
import ErrorPage from '../ErrorPage';
import './App.css';

class App extends Component {
  state = {
    results: [],
    loading: false,
    searched: false
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

  render() {
    const { results, loading, searched } = this.state;
    return (
      <>
        <Header />
        <main className="App">
          <ErrorPage>
            <Form setResults={this.setResults} setLoading={this.setLoading} />
            <Results results={results} loading={loading} searched={searched} />
          </ErrorPage>
        </main>
      </>
    );
  }
}

export default App;
