import { api } from '../../Services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as ConfigActions } from '../Ducks/config';

export function* getPokemon() { 
  try {
    const response = yield call(api.get, `/api/pokemon`);
    yield put(ConfigActions.getPokemonSuccess({
      schema: response.schema,
      values: response.values
    }));

  } catch (err) {
    console.log("err", err)
    // yield put(LoginActions.getLoginFBFailure('Erro ao buscar dados da API', err));
  }
}