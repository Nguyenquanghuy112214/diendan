import { useDispatch, useSelector } from 'react-redux';
import { changeMenuLv0 } from './reducer';

function useSelectMenuLv0() {
  const title = useSelector((state) => state.menulv0.menulv0.title);
  const dispatch = useDispatch();

  const setMenuLv0 = (menu) => {
    const action = changeMenuLv0(menu);
    dispatch(action);
  };
  return { title, setMenuLv0 };
}

export default useSelectMenuLv0;
