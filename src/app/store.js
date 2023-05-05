import { configureStore } from '@reduxjs/toolkit';
// redux
import document from '~/hooks/redux/document/reducer';
import activeModal from '~/hooks/redux/closemodal/reducer';
import pageModal from '~/hooks/redux/modalselect/reducer';
import activeModalHelp from '~/hooks/redux/openmodalhelp/reducer';
import auth from '~/hooks/redux/auth/reducer';
const rootReducer = {
  auth,
  document,
  activeModal,
  pageModal,
  activeModalHelp,
};

export const store = configureStore({
  reducer: rootReducer,
});
