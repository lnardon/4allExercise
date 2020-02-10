import React, {useEffect, useState} from 'react';

import Card from '../../Components/EstablishmentCard/EstablishmentCard';
import './EstablishmentsList.css';

export default function EstablishmentsList() {

    const [ establishmentsInfo , setEstablishmentsInfo ] = useState([]);

     const handleInfoFetch = () => {
        // Chamada da API para coletar as informações dos estabelecimentos
        // O resultado da chamada é guardado na variável establishmentsInfo
     }


     useEffect(() => {
        handleInfoFetch();
     }, []);

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
                {establishmentsInfo.length} lugares cadastrados
            </h3>
        </div>
        <div className={"listDiv"} >
            <Card establishmentName={"Silva"} establishmentProducts={"21"} />
        </div>
    </div>
  );
}
