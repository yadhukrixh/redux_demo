import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './slices/controlledByHeaderSlice';
import childernReducer from './slices/controlledByChildren';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    children: childernReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
