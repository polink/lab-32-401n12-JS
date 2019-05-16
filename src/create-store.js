import {createStore} from 'redux';
import appReducer from './reducer/app-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export default () => {
    return createStore(appReducer, composeWithDevTools());
};