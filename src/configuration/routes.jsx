import React from 'react';
import {Route, Switch} from 'react-router';
import * as paths from './paths';
import {isUser} from './guardians/IsUser';
import {isNotUser} from './guardians/IsNotUser';
import Navigation from '../components/common';
import BooksList from '../components/Books/BooksList';
import BookDetails from '../components/Books/details/BookDetails';
import LogInPage from '../components/LogInPage';
import HistoryPage from '../components/history/HistoryPage';

const routes = (
    <div>
        <Navigation.Header/>
        <Navigation.Body>
            <Switch>
                <Route path={paths.DASHBOARD_PAGE} render={() => (
                    <Switch>
                        <Route exact path={paths.DASHBOARD_PAGE} render={() => isUser(<BooksList/>)}/>
                        <Route path={paths.BOOK_DETAIL_PAGE(':bookId')} render={() => isUser(<BookDetails/>)}/>
                    </Switch>
                )}/>
                <Route exact path={paths.HISTORY_PAGE} render={() => isUser(<HistoryPage/>)}/>
            </Switch>
        </Navigation.Body>
        <Navigation.Footer/>
        <Route exact path={paths.LOGIN_PAGE} render={() => isNotUser(<LogInPage/>)}/>
    </div>
);

export default routes;
