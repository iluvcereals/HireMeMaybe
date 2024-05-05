import { createSlice } from '@reduxjs/toolkit';
import { type UserType } from '@/utils';

const initialState: UserType = {
    username: 'test user',
    jwt: 'test jwt',
    isSidebarOpen: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    },
});

export const { toggleSidebar } = userSlice.actions;
export default userSlice.reducer;
