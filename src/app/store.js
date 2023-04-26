import { configureStore } from '@reduxjs/toolkit';
import document from '~/hooks/redux/document/reducer'

const rootReducer = {
  document:document
};

export const store = configureStore({
  reducer:rootReducer,
});
