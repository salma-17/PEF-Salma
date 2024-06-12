import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/types';
import Cookies from 'js-cookie';

const initialState = {
  token: Cookies.get('token') || null,
  user: {
    name: Cookies.get('userName') || '',
    email: Cookies.get('userEmail') || '',
    type_id: Cookies.get('userType') || 1, // Correct this line to read 'userType' cookie
    
  },
  isAuthenticated: !!Cookies.get('token'),
  error: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        type_id: action.payload.type_id, // Ajouter type_id dans le payload
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: {},
        type_id: '', // Vider type_id
        isAuthenticated: false,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
}
