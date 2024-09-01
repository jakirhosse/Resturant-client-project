import { configureStore, createSlice } from "@reduxjs/toolkit";
import { pokemonApi } from "../api/MenuApi/MenuApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import MenusSlice from "../Services/Menus.Slice/Menus.Slice";
import { authApi } from "../api/Auth/auth";

const initialState = {
  user: null,
};

// Create authSlice with reducers
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

// Export actions from authSlice
export const { setUser, clearUser } = authSlice.actions;

// Configure and create the store
export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    carts: MenusSlice,
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      pokemonApi.middleware,
      authApi.middleware
    ),
});

// Set up listeners for RTK Query
setupListeners(store.dispatch);