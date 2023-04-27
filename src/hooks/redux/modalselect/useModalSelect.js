import { useDispatch, useSelector } from 'react-redux';
import { changePageModal } from './reducer';

function usePageModal() {
  const pageModal = useSelector((state) => state.pageModal.page);
  const dispatch = useDispatch();

  const setPageModal = (page) => {
    const action = changePageModal(page);
    dispatch(action);
  };
  return { pageModal, setPageModal };
}

export default usePageModal;
