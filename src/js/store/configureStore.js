import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createReducer from '../reducers/index';
import  { persistReducer } from 'redux-persist/es';


export default function configureStore(initStore = {}) {
   
    const createStoreMiddleware = applyMiddleware(...middlewares)(createStore);
    const store = createStoreMiddleware(
        persistReducer(storageConfig, createReducer()), initStore
    );

    return store
}