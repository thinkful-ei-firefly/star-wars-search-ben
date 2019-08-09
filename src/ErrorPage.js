import React, { Component } from 'react';

class ErrorPage extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    console.error(error);
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="error-page">
          <h2>Something went wrong!</h2>
          <p>Try refreshing the page</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorPage;
