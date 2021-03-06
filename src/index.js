import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loadable from 'react-loadable';
import LoadingPage from './components/loading/Loading';

import { Grommet } from 'grommet';
import grommetTheme from './grommet';

import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import store from './store/store';

const LoadableApp = Loadable({
    loader: () => App,
    loading: () => LoadingPage
})

ReactDOM.render(
    <Provider store={store({})}>
        <Grommet theme={grommetTheme} full={true}>
            <Router>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                </Switch>
            </Router>
        </Grommet>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
