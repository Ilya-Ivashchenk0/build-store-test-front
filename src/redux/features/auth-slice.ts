import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from '../types'

const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
  email: null
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { token, email } = action.payload
      if (token) {
        state.email = email
        state.token = token
        state.isLoggedIn = true
      }
    },
    logOut: state => {
      state.email = null
      state.token = null
      state.isLoggedIn = false
    }
  }
})

export const { logIn, logOut } = auth.actions
export default auth.reducer
