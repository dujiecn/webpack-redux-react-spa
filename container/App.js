import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import User from '../components/User'
import Reducers from '../reducers'
import configureStore from '../store/ConfigStore'

const store = configureStore(Reducers);

export default function render() {
    ReactDom.render(
        <Provider store={store}>
            <User />
        </Provider>,
        document.getElementById("main")
    );
}