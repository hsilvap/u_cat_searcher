import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import store from "../src/js/store";
import * as serviceWorker from './serviceWorker';
import Picker from '../src/components/UserPicker';

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Picker} />
                    <Route exact path="/user/:userId" component={App} />
                </div>
            </BrowserRouter>
        </Provider>
    )
}


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
