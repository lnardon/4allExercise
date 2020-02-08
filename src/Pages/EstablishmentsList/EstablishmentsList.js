import React, {useEffect, useState} from 'react';

import Card from '../../Components/EstablishmentCard/EstablishmentCard';
import './EstablishmentsList.css';

export default function EstablishmentsList() {

    const [ establishmentsInfo , setEstablishmentsInfo ] = useState([]);

     const handleInfoFetch = () => {
         // Chamada da API para info dos estabelecimentos
     }


     useEffect(() => {
        handleInfoFetch();
     }, []);

  return (
    <div className={"establishmentsListContainer"} >
        <h1> share eat </h1>
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