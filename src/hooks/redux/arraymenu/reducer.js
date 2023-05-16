import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [],
};

const arraymenu = createSlice({
  name: 'arraymenu',
  initialState: initialState,
  reducers: {
    changeArrayMenu: (state, action) => {
      console.log('action', action);
      state.menu = action.payload;
    },
  },
});

const { reducer, actions } = arraymenu;
export const { changeArrayMenu } = actions;
export default reducer;
