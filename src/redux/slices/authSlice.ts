import { createSlice } from "@reduxjs/toolkit";

export type TToken = {
  accessToken: string | null
};

const initialState: TToken = {
  accessToken: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeToken: (state, action) => {
      state.accessToken = action.payload
    }
  }
});

export const { storeToken } = authSlice.actions;
export default authSlice.reducer;