import { configureStore } from '@reduxjs/toolkit';
// redux
import document from '~/hooks/redux/document/reducer';
import activeModal from '~/hooks/redux/closemodal/reducer';
import pageModal from '~/hooks/redux/modalselect/reducer';
import activeModalHelp from '~/hooks/redux/openmodalhelp/reducer';
import auth from '~/hooks/redux/auth/reducer';
import selectMenu from '~/hooks/redux/selectmenu/reducer';
import selectLesson from '~/hooks/redux/selectIdForGetLesson/reducer';
const rootReducer = {
  auth,
  document,
  activeModal,
  pageModal,
  activeModalHelp,
  selectMenu,
  selectLesson,
};

export const store = configureStore({
  reducer: rootReducer,
});
