import { useDispatch, useSelector } from 'react-redux';
import { changeArrayMenu } from './reducer';

function useArrayMenu() {
  const arraymenu = useSelector((state) => state.arraymenu.menu);
  const dispatch = useDispatch();

  const setArrayMenu = (menu) => {
    const action = changeArrayMenu(menu);
    dispatch(action);
  };
  return { arraymenu, setArrayMenu };
}

export default useArrayMenu;
