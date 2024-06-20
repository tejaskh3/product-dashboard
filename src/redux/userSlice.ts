import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  given_name: string | null;
  picture: string | null;
  email: string | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  given_name: null,
  picture: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        given_name: string;
        picture: string;
        email: string;
      }>
    ) => {
      state.isLoggedIn = true;
      state.given_name = action.payload.given_name;
      state.picture = action.payload.picture;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.given_name = null;
      state.picture = null;
      state.email = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
