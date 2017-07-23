import React from 'react';
import {Route} from 'react-router';
import LogIn from '../containers/LogInPage';
import * as paths from './paths';
import {isUser} from './guardians/IsUser';

const routes = (
    <Route exact path={paths.DASHBOARD_PAGE} render={() => isUser(<LogIn/>)}/>
);

export default routes;
