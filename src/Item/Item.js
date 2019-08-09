import React from 'react';
import './Item.css';

function Item(props) {
  return <li className="item">{props.name}</li>;
}

export default Item;
