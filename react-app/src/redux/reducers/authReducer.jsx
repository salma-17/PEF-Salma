// src/redux/reducers/authReducer.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/types';
import Cookies from 'js-cookie';

const initialState = {
    token: Cookies.get('token') || null,
    user: {
        name: Cookies.get('userName') || '',
        email: Cookies.get('userEmail') || '',
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
                isAuthenticated: false,
                error: null,
                loading: false,
            };
        default:
            return state;
    }
}
