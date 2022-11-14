import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    users: [],
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logOut: (state) => {
            state.user = null;
        },
        register: (state, action) => {
            state.users = [...state, action.payload];
        }
    }
});

export const {register, login, logOut} = authSlice.actions;
export const selectUser = (state, action) => state.auth.users.filter(user => user.email !== action.payload.email);
export default authSlice.reducer;