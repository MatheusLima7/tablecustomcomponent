
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  offlineMiddleware,
  suspendSaga,
  consumeActionMiddleware
} from "redux-offline-queue";
import reducers from "./Ducks";
import sagas from './Sagas';

// const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const middlewares = [];
const sagaMiddleware = createSagaMiddleware({  }); // sagaMonitor

middlewares.push(offlineMiddleware());
middlewares.push(suspendSaga(sagaMiddleware));
middlewares.push(consumeActionMiddleware());

const createAppropriateStore = createStore; // __DEV__ ? console.tron.createStore : 

const store = createAppropriateStore(
  reducers,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(sagas);

export default store;