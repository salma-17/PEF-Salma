import axios from 'axios';
import Cookies from 'js-cookie';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST } from './types';

export const login = (values) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_REQUEST' }); // Add loading state indicator
    const response = await axios.post("http://127.0.0.1:8000/api/login", values);
    if (response.status === 200 && response.data) {
      const data = response.data;

      console.log('Login response:', data); // Log the response

      Cookies.set('token', data.token, { expires: 7, secure: true, sameSite: 'strict' });
      Cookies.set('userName', data.user.name, { expires: 7, secure: true, sameSite: 'strict' });
      Cookies.set('userEmail', data.user.email, { expires: 7, secure: true, sameSite: 'strict' });
      Cookies.set('userType', data.user.type_id, { expires: 7, secure: true, sameSite: 'strict' }); // Correctly set type_id in cookies

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user: data.user,
          token: data.token,
          type_id: data.user.type_id, // Include type_id in payload
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
  dispatch({ type: REGISTER_REQUEST });
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/register", values);

    if (response.status === 201) {
      const data = response.data;

      console.log('Register response:', data); // Log the response

      Cookies.set('token', data.token, { expires: 7, secure: true, sameSite: 'strict' });
      Cookies.set('userName', data.user.name, { expires: 7, secure: true, sameSite: 'strict' });
      Cookies.set('userEmail', data.user.email, { expires: 7, secure: true, sameSite: 'strict' });
      Cookies.set('userType', data.user.type_id, { expires: 7, secure: true, sameSite: 'strict' }); // Correctly set type_id in cookies

      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          user: data.user,
          token: data.token,
          type_id: data.user.type_id, // Include type_id in payload
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

export const logout = () => (dispatch) => {
  Cookies.remove('token');
  Cookies.remove('userName');
  Cookies.remove('userEmail');
  Cookies.remove('userType'); // Ensure type_id cookie is removed

  dispatch({ type: LOGOUT });
};
