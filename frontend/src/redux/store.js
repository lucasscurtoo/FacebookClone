import { configureStore } from "@reduxjs/toolkit"
import { authApi } from "./Api/userAuth"
import userReducer from "./reducers/userReducer"

export default configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})
