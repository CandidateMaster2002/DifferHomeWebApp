import {createStore} from 'redux';
import homeReducer from './homeReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const store=createStore(homeReducer,composeWithDevTools());

export default store;