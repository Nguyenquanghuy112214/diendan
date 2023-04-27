import { useDispatch, useSelector } from 'react-redux';
import { changeActiveModal } from './reducer';

function useCloseModal() {
  const isActiveModal = useSelector((state) => state.activeModal.isActive);
  const dispatch = useDispatch();

  const setActiveModal = (active) => {
    const action = changeActiveModal(active);
    dispatch(action);
  };
  return { isActiveModal, setActiveModal };
}

export default useCloseModal;
