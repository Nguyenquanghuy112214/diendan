import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectLesson: {},
};

const selecLesson = createSlice({
  name: 'select menu',
  initialState: initialState,
  reducers: {
    changeLesson: (state, action) => {
      state.selectLesson = action.payload;
    },
  },
});

const { reducer, actions } = selecLesson;
export const { changeLesson } = actions;
export default reducer;
