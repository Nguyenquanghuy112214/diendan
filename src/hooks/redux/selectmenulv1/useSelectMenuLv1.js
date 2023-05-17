import { useDispatch, useSelector } from 'react-redux';
import { changeMenuLv1 } from './reducer';

function useSelectMenuLv1() {
  const title = useSelector((state) => state.menulv1.menulv1.title);
  const dispatch = useDispatch();

  const setMenuLv1 = (menu) => {
    const action = changeMenuLv1(menu);
    dispatch(action);
  };
  return { title, setMenuLv1 };
}

export default useSelectMenuLv1;
