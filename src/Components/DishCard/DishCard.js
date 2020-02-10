import React from 'react';
import './DishCard.css'

export default function DishCard({dishName, dishPrice, dishDescription}) {
  return (
    <div className={"dishCardContainer"} >
      <div className={"dishCardHeaderDiv"} >
        <h2> {dishName} </h2>
        <h3> R$ {dishPrice} </h3>
      </div>
      <div className={"dishCardBodyDiv"} >
        <p> {dishDescription} </p>
      </div>
    </div>
  );
}
