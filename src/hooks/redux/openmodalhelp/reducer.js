import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
};

const activeModalHelp = createSlice({
  name: 'open modal hepl',
  initialState: initialState,
  reducers: {
    changeActiveModalHelp: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

const { reducer, actions } = activeModalHelp;
export const { changeActiveModalHelp } = actions;
export default reducer;
