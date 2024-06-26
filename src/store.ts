import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import jobReducer from './features/job//jobSlice';

export const store = configureStore({
    reducer: {
        userState: userReducer,
        jobState: jobReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
    getState: () => RootState;
    dispatch: AppDispatch;
};
