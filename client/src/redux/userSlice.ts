import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
  _id: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: boolean;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: () => initialState,
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;
