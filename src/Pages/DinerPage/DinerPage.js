import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import './DinerPage.css';
import DishCard from '../../Components/DishCard/DishCard';

export default function DinerPage(props) {

    const [dinerInfo , setDinerInfo] = useState({});
    const [canRender , setCanRender] = useState(false);

    let history = useHistory();
    let {dinerName} = useParams();

    const getDinerInfo = () => {
        switch(dinerName){
            case "Canal Café":
                setDinerInfo(props.info[1]);
                break;
            case "Silva Lanches":
                setDinerInfo(props.info[0]);
                break;
            default: setDinerInfo(props)

        }
        setCanRender(true)
    }

    useEffect(() => {
        getDinerInfo();
    }, [])

  return (
    <div>
        {canRender ?
        <div className={"dinerPageContainer"} >
            <div className={"headerRegistrationDiv"} >
                <img id="backBtn" alt="Back Button" src={require('../../assets/images/left-chevron.svg')} onClick={ () => {history.goBack()} } />
                <h2>share eat</h2>
            </div>
            <div className={"dinerPageHeaderDiv"} >
                <h2> {dinerInfo.name} </h2>
                <h4> {dinerInfo.menuItems.length} pratos </h4>
            </div>
            <div className={"dishesListDiv"}>
                {dinerInfo.menuItems.map((dish) => {
                    return <DishCard key={dish.name} dishName={dish.name} dishPrice={dish.price.toFixed(2)} dishDescription={dish.description} />
                })}
            </div>
            <div id="addBtn" onClick={ () => {history.push("/" + dinerInfo.name + "/registration")} } >
                +
            </div> 
        </div> :
        <div></div>
        }
    </div>
  );
}
