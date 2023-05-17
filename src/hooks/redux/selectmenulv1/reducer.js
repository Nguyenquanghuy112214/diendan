import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menulv1: {
    title: null,
  },
};

const selectMenuLv1 = createSlice({
  name: 'select menu',
  initialState: initialState,
  reducers: {
    changeMenuLv1: (state, action) => {
      state.menulv1 = action.payload;
    },
  },
});

const { reducer, actions } = selectMenuLv1;
export const { changeMenuLv1 } = actions;
export default reducer;
