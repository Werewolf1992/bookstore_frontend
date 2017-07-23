import React from 'react';
import {Route} from 'react-router';
import NavigationWrapper from '../containers/NavigationWrapper';
import * as paths from './paths';
import {isUser} from './guardians/IsUser';

const routes = (
    <Route exact path={paths.DASHBOARD_PAGE} render={() => isUser(<NavigationWrapper/>)}/>
);

export default routes;
