import React from  'react';

import './card.styles.css'

export const Card = (props) => {
  const { name, id, email } = props.monster;
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${id}?set=set2`} alt="monster"/>
      <h1>{ name }</h1>
      <h2>{ email }</h2>
    </div>
  );
}