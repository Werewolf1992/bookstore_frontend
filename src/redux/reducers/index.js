import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import dashboard from './dashboardReducer';
import auth from './authReducer';
import navigation from './common/navigationReducer';

const root = combineReducers({
    dashboard,
    auth,
    navigation,
    routing: routerReducer,
});

export default root;
