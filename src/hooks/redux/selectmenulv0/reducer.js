import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menulv0: {
    title: null,
  },
};

const selectMenuLv0 = createSlice({
  name: 'select menu',
  initialState: initialState,
  reducers: {
    changeMenuLv0: (state, action) => {
      state.menulv0 = action.payload;
    },
  },
});

const { reducer, actions } = selectMenuLv0;
export const { changeMenuLv0 } = actions;
export default reducer;
