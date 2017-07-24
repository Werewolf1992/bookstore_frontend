import React from 'react';
import {Route, Switch} from 'react-router';
import LogIn from '../containers/LogInPage';
import * as paths from './paths';
import {isUser} from './guardians/IsUser';
import {isNotUser} from './guardians/IsNotUser';
import Navigation from '../components/common';
import BooksList from '../components/BooksList';

const routes = (
    <Navigation>
        <Switch>
            <Route exact path={paths.DASHBOARD_PAGE} render={() => isUser(<BooksList/>)}/>
            <Route exact path={paths.LOGIN_PAGE} render={() => isNotUser(<LogIn/>)}/>
        </Switch>
    </Navigation>
);

export default routes;
