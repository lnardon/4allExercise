import React from 'react';
import {useHistory} from 'react-router-dom';

import './EstablishmentPage.css';
import DishCard from '../../Components/DishCard/DishCard';

export default function EstablishmentPage({}) {

    let history = useHistory();
    let establishmentName = "Z Cafe";
    let establishmentNumberOfDishes = 31;
  return (
    <div className={"establishmentPageContainer"} >
        <div className={"headerRegistrationDiv"} >
            <img id="backBtn" alt="Back Button" src={require('../../assets/images/left-chevron.svg')} onClick={ () => {history.goBack()} } />
            <h2>share eat</h2>
        </div>
        <div className={"establishmentPageHeaderDiv"} >
            <h2> {establishmentName} </h2>
            <h4> {establishmentNumberOfDishes} pratos </h4>
        </div>
        <div className={"dishesListDiv"}>
            <DishCard dishName={"X-Bacon"} dishPrice={"23.90"} />
        </div>
        <div id="addBtn" onClick={ () => {history.push("/" + establishmentName + "/registration")} } >
            +
        </div> 
    </div>
  );
}
