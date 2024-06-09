// src/redux/actions/authActions.js
import axios from 'axios';
import Cookies from 'js-cookie';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_SUCCESS, REGISTER_FAILURE } from './types';

export const login = (values) => async (dispatch) => {
  try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", values);
      if (response.status === 200 && response.data) {
          const data = response.data;

          Cookies.set('token', data.token, { expires: 7, secure: true, sameSite: 'strict' });
          Cookies.set('userName', data.user.name, { expires: 7, secure: true, sameSite: 'strict' });
          Cookies.set('userEmail', data.user.email, { expires: 7, secure: true, sameSite: 'strict' });

          dispatch({
              type: LOGIN_SUCCESS,
              payload: {
                  user: data.user,
                  token: data.token,
              },
          });

      } else {
          throw new Error('Invalid response or no data in response');
      }
  } catch (error) {
      dispatch({
          type: LOGIN_FAILURE,
          payload: error.response ? error.response.data.message : error.message,
      });
  }
};


export const register = (values) => async (dispatch) => {
  try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", values);
      
      if (response.status === 201) {
          const data = response.data;

          Cookies.set('token', data.token, { expires: 7, secure: true, sameSite: 'strict' });
          Cookies.set('userName', data.user.name, { expires: 7, secure: true, sameSite: 'strict' });
          Cookies.set('userEmail', data.user.email, { expires: 7, secure: true, sameSite: 'strict' });

          dispatch({
              type: REGISTER_SUCCESS,
              payload: {
                  user: data.user,
                  token: data.token,
              },
          });
      } else {
          throw new Error('Invalid response status');
      }
  } catch (error) {
      dispatch({
          type: REGISTER_FAILURE,
          payload: error.response ? error.response.data.message : error.message,
      });
  }
};