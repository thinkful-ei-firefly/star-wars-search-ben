import React from 'react';
import Item from '../Item/Item';
import './Results.css';

function Results(props) {
  if (props.loading) {
    return (
      <section className="results">
        <ul className="results-list">
          <li>Loading...</li>
        </ul>
      </section>
    );
  } else if (props.searched) {
    if (props.results.length > 0) {
      return (
        <section className="results">
          <ul className="results-list">
            {props.results.map(item => (
              <Item key={props.results.indexOf(item)} name={item} />
            ))}
          </ul>
        </section>
      );
    } else {
      return (
        <section className="results">
          <ul className="results-list">
            <li>No Results!</li>
          </ul>
        </section>
      );
    }
  } else {
    return null;
  }
}

export default Results;
