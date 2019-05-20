import { all, takeLatest, spawn } from 'redux-saga/effects';

import { Types as ConfigTypes } from '../Ducks/config';
import { getPokemon } from './config';
import { startWatchingNetworkConnectivity } from "./offline";


export default function* rootSaga() { 
  return yield all([
    spawn(startWatchingNetworkConnectivity),
    takeLatest(ConfigTypes.GET_POKEMON, getPokemon)
  ]);
}
