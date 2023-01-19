import { createSlice } from "@reduxjs/toolkit"
import { authApi } from "../Api/userAuth"

const userSlice = createSlice({
  name: "user",
  initialState: {
    first_name: null,
    last_name: null,
    picture: null,
    token: null,
    username: null,
    verified: false,
    loggedIn: false,
  },
  reducers: {
    addUserData: (state, action) => {
      state.first_name = action.payload.first_name
      state.last_name = action.payload.last_name
      state.picture = action.payload.picture
      state.token = action.payload.token
      state.username = action.payload.username
      state.verified = action.payload.verified
      state.loggedIn = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authApi.endpoints.login, (state, { payload }) => {
      state.userData = payload
    })
  },
})

export const { addUserData } = userSlice.actions
export default userSlice.reducer
