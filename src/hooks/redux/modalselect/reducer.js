import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
};

const pageModal = createSlice({
  name: 'pagemodal',
  initialState: initialState,
  reducers: {
    changePageModal: (state, action) => {
      state.page = action.payload;
    },
  },
});

const { reducer, actions } = pageModal;
export const { changePageModal } = actions;
export default reducer;
