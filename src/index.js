import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// Components
import EstablishmentsList from './Pages/EstablishmentsList/EstablishmentsList';
import DishRegistration from './Pages/DishRegistration/DishRegistration';
import EstablishmentPage from './Pages/EstablishmentPage/EstablishmentPage';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={EstablishmentsList} />
            <Route path="/:establishmentName/registration" component={DishRegistration} />
            <Route path="/:establishmentName" component={EstablishmentPage} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
