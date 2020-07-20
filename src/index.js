import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import React from "react";
import { HashRouter} from "react-router-dom";
import {Provider} from "react-redux";




    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>

        </HashRouter>,
        document.getElementById('root')
    );

serviceWorker.unregister();
