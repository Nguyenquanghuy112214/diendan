import { configureStore } from '@reduxjs/toolkit';
// redux
import document from '~/hooks/redux/document/reducer';
import activeModal from '~/hooks/redux/closemodal/reducer';
import pageModal from '~/hooks/redux/modalselect/reducer';
const rootReducer = {
  document,
  activeModal,
  pageModal,
};

export const store = configureStore({
  reducer: rootReducer,
});
