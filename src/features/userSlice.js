import { createSlice } from '@reduxjs/toolkit';

//Initial State
const initialState = {
  channelId: null,
};


export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    channel: (state,action) => {
      //save channel id
      state.channelId = action.payload.channelId;
    },

  },

});

//ACTION
export const { channel } = userSlice.actions;

//GRAB THE VALUE
export const selectUser = (state) => state.user;

export default userSlice.reducer;
