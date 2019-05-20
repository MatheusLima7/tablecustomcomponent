import { api } from '../../Services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as LoginActions } from '../Ducks/login';
import { AsyncStorage, Alert } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

export function* getLoginFb(action) {
  try {
    // const response = yield call(api.get, `/api/v1/users/providers`, params);
    // yield put(LoginActions.getLoginFBSuccess(response.data));
  } catch (err) {
    // yield put(LoginActions.getLoginFBFailure('Erro ao buscar dados da API', err));
  }
}


export function* getLogin(action) {
  try {
    // const response = yield call(api.post, `/api/v1/users/sessions `, params);
    yield put(LoginActions.getLoginSuccess(response.data));
    
  } catch (err) {
    // yield put(LoginActions.getLoginFailure('Erro ao buscar dados da API', err));
    
  }
}


export function* getForgot(action) {
  try {
    // const response = yield call(api.post, `/api/v1/users/passwords/request-code`, params);
    // yield put(LoginActions.getForgotSuccess(response.data));
    
  } catch (err) {
    // yield put(LoginActions.getForgotFailure('Erro ao buscar dados da API', err));
    
  }
}