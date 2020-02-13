import React from 'react';

import Card from '../../Components/EstablishmentCard/EstablishmentCard';
import './EstablishmentsList.css';

export default function EstablishmentsList(props) {
  return (
    <div className={"establishmentsListContainer"} >
      <div className={"headerEstablishmentListDiv"} >
        <h2>share eat</h2>
      </div> 
        <div className={"headerDiv"} >
            <h2>
                Lugares
            </h2>
            <h3>
                {props.info.length} lugares cadastrados
            </h3>
        </div>
        <div className={"listDiv"} >
          {props.info.map((establishment) => {
            return  <Card key={establishment.name} establishmentName={establishment.name} establishmentProducts={establishment.menuItems} />
          })}
        </div>
    </div>
  );
}
