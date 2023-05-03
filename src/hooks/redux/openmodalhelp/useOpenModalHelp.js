import { useDispatch, useSelector } from 'react-redux';
import { changeActiveModalHelp } from './reducer';

function useOpenModalHelp() {
  const isActiveModalHelp = useSelector((state) => state.activeModalHelp.isActive);
  const dispatch = useDispatch();

  const setActiveModalHelp = (active) => {
    const action = changeActiveModalHelp(active);
    dispatch(action);
  };
  return { isActiveModalHelp, setActiveModalHelp };
}

export default useOpenModalHelp;
