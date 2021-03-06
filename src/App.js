import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './app.css';

// Components
import DinerList from './Pages/DinerList/DinerList';
import DishRegistration from './Pages/DishRegistration/DishRegistration';
import DinerPage from './Pages/DinerPage/DinerPage';

export default function App(props) {


  const [ dinersInfo , setdinersInfo ] = useState([
      {
        "name": "Silva Lanches",
        "menuItems": [
          {
            "name": "Xis Bacon",
            "description" : "Pão, alface, tomate, carne, bacon, milho, ervilha, maionese, catchup e mostarda",
            "price": 20.50
          },
          {
            "name": "Xis Veg",
            "description" : "Pão, alface, tomate, milho, ervilha, maionese, catchup e mostarda",
            "price": 22.50
          },
          {
            "name": "Bauru Picanha",
            "description" : "Pão, alface, tomate, picanha e maionese",
            "price": 25.00
          }
        ]
      },
      {
        "name": "Canal Café",
        "menuItems": [
          {
            "name": "Café Expresso",
            "description" : "50ml do mais puro café moído e torrado ",
            "price": 5.50
          },
          {
            "name": "Café Ristretto",
            "description" : "30ml do melhor café aliado dos principais óleos essenciais",
            "price": 7.50
          },
          {
            "name": "Café Mochaccino",
            "description" : "70ml do melhor café expresso junto ao delicioso leite vaporizado e o melhor chocolate suiço",
            "price": 10.50
          },
          {
            "name": "Suco  Natural",
            "description" : "500ml de puro suco de frutas da estação",
            "price": 12.50
          }
        ]
      },
  ]);

  const handleInfoFetch = () => {
    // Chamada da API para coletar as informações dos estabelecimentos
    // O resultado da chamada é guardado na variável dinersInfo
  }


  useEffect(() => {
    handleInfoFetch();
  }, []);

  return (
    <div className={"appContainer"} >
      <Route render={({location}) => (
        <TransitionGroup>      
          <CSSTransition key={location.key} timeout={450} classNames="fade" >
            <Switch location={location}>
              <Route path="/" exact={true} render={() => <DinerList {...props} info={dinersInfo} />} />
              <Route path="/:dinerName" exact={true} render={() => <DinerPage  {...props} info={dinersInfo} />} />
              <Route path="/:dinerName/registration" render={() => <DishRegistration  {...props} info={dinersInfo} />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}
