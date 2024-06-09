// src/redux/reducers/authReducer.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/types';
import Cookies from 'js-cookie';

const initialState = {
    token: Cookies.get('token') || null,
    user: {
        name: Cookies.get('userName') || '',
        email: Cookies.get('userEmail') || '',
    },
    isAuthenticated: !!Cookies.get('token'),
    error: null,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isAuthenticated: true,
                error: null,
            };
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                token: null,
                user: {},
                isAuthenticated: false,
                error: null,
            };
        default:
            return state;
    }
}
