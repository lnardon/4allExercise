import React from 'react';
import {useHistory} from 'react-router-dom';
import './DinerCard.css';

export default function DinerCard({ dinerName, dinerProducts }) {

    let history = useHistory();

  return (
    <div className={"dinerCardContainer"} >
        <div className={"infoDiv"} onClick={() => {history.push("/" + dinerName)}} >
            <h3 id="dinerName" >
                {dinerName}
            </h3>
            <h4 id="dinerProductsQuantity" >
                {dinerProducts.length} Pratos
            </h4>
        </div>
        <div className={"addBtnDiv"} onClick={ () => history.push("/" + dinerName + "/registration") } >
            <img alt="Add Btn Icon" src={require("../../assets/images/plus.svg")}/>
        </div>
    </div>
  );
}
