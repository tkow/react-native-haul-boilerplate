import { applyMiddleware, createStore,compose, AnyAction, Store } from 'redux';
import {  persistStore } from 'redux-persist';
import middlewares, {sagaMiddleWare} from './middleware';
import sagas from './rootSagas';
import reducer from "./rootReducer";
import initialState, {AppState} from './appState' 


console.disableYellowBox = true;

// Connect our store to the reducers
const store = createStore(reducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

sagaMiddleWare.run(sagas);

export { store, persistor };
