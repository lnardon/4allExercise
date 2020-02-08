import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// Components
import App from './App';
import EstablishmentsList from './Pages/EstablishmentsList/EstablishmentsList';
import DishRegistration from './Pages/DishRegistration/DishRegistration';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={EstablishmentsList} />
            <Route path="/dish" component={DishRegistration} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
