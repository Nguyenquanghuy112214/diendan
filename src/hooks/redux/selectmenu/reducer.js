import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuTree: {
    idController: null,
    menuId: null,
    title: null,
  },
};

const selectMenu = createSlice({
  name: 'select menu',
  initialState: initialState,
  reducers: {
    changeSelectMenu: (state, action) => {
      console.log('action', action);
      state.menuTree = action.payload;
    },
  },
});

const { reducer, actions } = selectMenu;
export const { changeSelectMenu } = actions;
export default reducer;
