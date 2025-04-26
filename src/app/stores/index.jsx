import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import AuthSlice from '../../entities/auth/api';

const appReducer = combineReducers({
  auth: AuthSlice.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_STORE') {
    state = undefined;
  }

  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});
