import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
};

const activeModal = createSlice({
  name: 'close modal',
  initialState: initialState,
  reducers: {
    changeActiveModal: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

const { reducer, actions } = activeModal;
export const { changeActiveModal } = actions;
export default reducer;
