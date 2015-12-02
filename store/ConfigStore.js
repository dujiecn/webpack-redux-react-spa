import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

export default function configureStore(reducer,initialState) {
	let createStoreWithMiddleware = null;
	if(__DEV__) {
		createStoreWithMiddleware = applyMiddleware(thunkMiddleware,loggerMiddleware())(createStore);
	}else {
		createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
	} 
     
    return createStoreWithMiddleware(reducer,initialState);
}