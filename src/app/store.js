import { configureStore } from '@reduxjs/toolkit';
// redux
import document from '~/hooks/redux/document/reducer';
import activeModal from '~/hooks/redux/closemodal/reducer';
import pageModal from '~/hooks/redux/modalselect/reducer';
import activeModalHelp from '~/hooks/redux/openmodalhelp/reducer';
import auth from '~/hooks/redux/auth/reducer';
import selectMenu from '~/hooks/redux/selectmenu/reducer';
import selectLesson from '~/hooks/redux/selectIdForGetLesson/reducer';
import arraymenu from '~/hooks/redux/arraymenu/reducer';
import menulv0 from '~/hooks/redux/selectmenulv0/reducer';
import menulv1 from '~/hooks/redux/selectmenulv1/reducer';
import menulv2 from '~/hooks/redux/selectmenulv2/reducer';
const rootReducer = {
  auth,
  document,
  activeModal,
  pageModal,
  activeModalHelp,
  selectMenu,
  selectLesson,
  arraymenu,
  menulv0,
  menulv1,
  menulv2,
};

export const store = configureStore({
  reducer: rootReducer,
});
