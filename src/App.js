import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './app.css';

// Components
import EstablishmentsList from './Pages/EstablishmentsList/EstablishmentsList';
import DishRegistration from './Pages/DishRegistration/DishRegistration';
import EstablishmentPage from './Pages/EstablishmentPage/EstablishmentPage';

export default function App() {
  return (
    <div className={"appContainer"} >
      <Route render={({location}) => (
        <TransitionGroup>      
          <CSSTransition key={location.key} timeout={450} classNames="fade" >
            <Switch location={location}>
              <Route path="/" exact={true} component={EstablishmentsList} />
              <Route path="/:establishmentName" exact={true} component={EstablishmentPage} />
              <Route path="/:establishmentName/registration" component={DishRegistration} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}
