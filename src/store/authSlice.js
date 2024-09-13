import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    section: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, actions) => {
            state.status= true
            state.section= actions.payload
        },
        logout: (state) => {
            state.status= false
            state.section= null
        },
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer