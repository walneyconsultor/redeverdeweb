import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import fbConfig from '../config/firebase';

export default (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose (
            applyMiddleware(thunk.withExtraArgument({
                getFirebase,
                getFirestore
            })),
            window.devToolsExtension ? window.devToolsExtension() : f => f,
            reduxFirestore(fbConfig),
            reactReduxFirebase(fbConfig)
        ),
    );
    return store;
}