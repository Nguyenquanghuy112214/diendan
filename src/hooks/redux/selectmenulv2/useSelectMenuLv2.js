import { useDispatch, useSelector } from 'react-redux';
import { changeMenuLv2 } from './reducer';

function useSelectMenuLv2() {
  const title = useSelector((state) => state.menulv2.menulv2.title);
  const dispatch = useDispatch();

  const setMenuLv2 = (menu) => {
    const action = changeMenuLv2(menu);
    dispatch(action);
  };
  return { title, setMenuLv2 };
}

export default useSelectMenuLv2;
