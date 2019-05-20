
export const Types = {
  GET_REQUEST: 'login/GET_REQUEST',
  GET_SUCCESS: 'login/GET_SUCCESS',
  GET_FAILURE: 'login/GET_FAILURE',
  CHANGE_INFO_LOGIN: 'CHANGE_INFO_LOGIN'
};

const INITIAL_STATUS = {
  error: false,
  title: "",
  message: "",
  next: false,
  page: ""
}

const INITIAL_LOGIN = {
  email: "sxsx",
  password: "zxz",
  token: "",
  auth: false,
  debug: false,
  device_id: null,
  pushToken: null
}

const initialState = {
  login: INITIAL_LOGIN,
  data: [],
  status: INITIAL_STATUS,
  loading: false,
};


export default function login(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data.data,
        loading: false,
      };
    case Types.GET_FAILURE:
      return { ...state, loading: false };
    case Types.CHANGE_INFO_LOGIN:
      return { 
        ...state, 
        login: action.payload, 
        status: INITIAL_STATUS 
      }
    default:
      return state;
  }
}


export const Creators = {

  getLoginRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
  }),

  getLoginSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getLoginFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
  }),

  changeInfoLogin: (obj) => ({ 
    type: Types.CHANGE_INFO_LOGIN,
    payload: obj
  })  

};