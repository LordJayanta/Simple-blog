import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
    session: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, actions) => {
            state.status = true
            state.userData = actions.payload.userdata
            state.session = actions.payload.session
        },
        logout: (state) => {
            state.status = false
            state.userData = null
            state.session = null
        },
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer