import React from 'react';
import {useHistory} from 'react-router-dom';
import './EstablishmentCard.css';

export default function EstablishmentCard({ establishmentName, establishmentProducts }) {

    let history = useHistory();

  return (
    <div className={"establishmentCardContainer"} >
        <div className={"infoDiv"} onClick={() => {history.push("/" + establishmentName)}} >
            <h3 id="establishmentName" >
                {establishmentName}
            </h3>
            <h4 id="establishmentProductsQuantity" >
                {establishmentProducts} Pratos
            </h4>
        </div>
        <div className={"addBtnDiv"} onClick={ () => history.push("/" + establishmentName + "/registration") } >
            <img alt="Add Btn Icon" src={require("../../assets/images/plus.svg")}/>
        </div>
    </div>
  );
}
