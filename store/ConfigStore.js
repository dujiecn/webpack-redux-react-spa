import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

export default function configureStore(reducer,initialState) {
    const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,loggerMiddleware())(createStore);
    return createStoreWithMiddleware(reducer,initialState);
}