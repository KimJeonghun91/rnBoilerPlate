import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { counterSlice } from './counterSlice';
import { themeSlice } from './themeSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
