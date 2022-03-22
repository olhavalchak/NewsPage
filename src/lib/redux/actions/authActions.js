import { authTypes } from '../types';

export const authActions = Object.freeze({
  fillUserProfile: (userInfo) => ({
    type: authTypes.FILL_USER_PROFILE,
    payload: userInfo,
  }),
  setFetchingError: (error) => ({
    type: authTypes.SET_AUTH_ERROR,
    payload: error,
  }),
});