import React from 'react';
import Item from '../Item/Item';
import './Results.css';

function Results(props) {
  return (
    <section className="results">
      <ul className="results-list">
        {props.results.map(item => (
          <Item key={props.results.indexOf(item)} name={item} />
        ))}
      </ul>
    </section>
  );
}

export default Results;
