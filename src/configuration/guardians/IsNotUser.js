import {store} from '../../index';
import * as React from 'react';
import {Redirect} from 'react-router';
import idx from 'idx';
import {DASHBOARD_PAGE} from '../paths';

export function isNotUser(component) {
    if(!idx(store, x => x.getState().auth.auth_token)) {
        return component;
    } else {
        return <Redirect to={DASHBOARD_PAGE} push/>;
    }
}