import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Diễn Đàn BKT',
};

const document = createSlice({
  name: 'document',
  initialState: initialState,
  reducers: {
    changeDocument: (state, action) => {
      state.title = action.payload;
    },
  },
});

const { reducer, actions } = document;
export const { changeDocument } = actions;
export default reducer;
