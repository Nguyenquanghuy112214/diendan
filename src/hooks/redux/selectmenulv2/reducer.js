import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menulv2: {
    title: null,
  },
};

const selectMenuLv2 = createSlice({
  name: 'select menu',
  initialState: initialState,
  reducers: {
    changeMenuLv2: (state, action) => {
      state.menulv2 = action.payload;
    },
  },
});

const { reducer, actions } = selectMenuLv2;
export const { changeMenuLv2 } = actions;
export default reducer;
