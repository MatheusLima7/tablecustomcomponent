
export const Types = {
  GET_POKEMON: 'config/GET_POKEMON',
  GET_POKEMON_SUCCESS: 'config/GET_POKEMON_SUCCESS',
  CHANGE_TABLE_CONFIG: 'config/CHANGE_TABLE_CONFIG'
};


const initialState = {
  tables: {},
  schema: [],
  values: []
};


export default function config(state = initialState, action) {
  switch (action.type) {
    case Types.GET_POKEMON_SUCCESS:
      return { 
        ...state, 
        schema: action.payload.schema,
        values: action.payload.values
      };
    case Types.CHANGE_TABLE_CONFIG:
      const tablesConfig = state.tables;
            tablesConfig[action.payload.property] = action.payload.value;
      return { 
        ...state, 
        tables: tablesConfig
      };
    default:
      return state;
  }
}


export const Creators = {

  getPokemon: payload => ({ 
    type: Types.GET_POKEMON,
    payload: payload,
  }),
  getPokemonSuccess: payload => ({ 
    type: Types.GET_POKEMON_SUCCESS,
    payload: payload,
  }),
  updateTableConfig: payload => ({
    type: Types.CHANGE_TABLE_CONFIG,
    payload: payload,
  })

};