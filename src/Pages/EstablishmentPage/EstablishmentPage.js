import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import './EstablishmentPage.css';
import DishCard from '../../Components/DishCard/DishCard';

export default function EstablishmentPage(props) {

    const [establishmentInfo , setEstablishmentInfo] = useState({});
    const [canRender , setCanRender] = useState(false);

    let history = useHistory();
    let {establishmentName} = useParams();

    const getEstablishmentInfo = () => {
        switch(establishmentName){
            case "Canal Café":
                setEstablishmentInfo(props.info[1]);
                break;
            case "Silva Lanches":
                setEstablishmentInfo(props.info[0]);
                break;
            default: setEstablishmentInfo(props)

        }
        setCanRender(true)
    }

    useEffect(() => {
        getEstablishmentInfo();
    }, [])

  return (
    <div>
        {canRender ?
        <div className={"establishmentPageContainer"} >
            <div className={"headerRegistrationDiv"} >
                <img id="backBtn" alt="Back Button" src={require('../../assets/images/left-chevron.svg')} onClick={ () => {history.goBack()} } />
                <h2>share eat</h2>
            </div>
            <div className={"establishmentPageHeaderDiv"} >
                <h2> {establishmentInfo.name} </h2>
                <h4> {establishmentInfo.menuItems.length} pratos </h4>
            </div>
            <div className={"dishesListDiv"}>
                {establishmentInfo.menuItems.map((dish) => {
                    return <DishCard key={dish.name} dishName={dish.name} dishPrice={dish.price.toFixed(2)} dishDescription={dish.description} />
                })}
            </div>
            <div id="addBtn" onClick={ () => {history.push("/" + establishmentInfo.name + "/registration")} } >
                +
            </div> 
        </div> :
        <div></div>
        }
    </div>
  );
}
