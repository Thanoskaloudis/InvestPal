import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  userId: string;
};

const initialState: UserState = {
  userId: '63f4e93ec60a4d30bfeaaa45',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = userSlice.actions;

export default userSlice.reducer;
