import { useDispatch, useSelector } from 'react-redux';
import { changeSelectMenu } from './reducer';

function useSelectMenu() {
  const idForum = useSelector((state) => state.selectMenu.menuTree.idController);
  const menuId = useSelector((state) => state.selectMenu.menuTree.menuId);
  const title = useSelector((state) => state.selectMenu.menuTree.title);
  const dispatch = useDispatch();

  const setActiveModalHelp = (menu) => {
    const action = changeSelectMenu(menu);
    dispatch(action);
  };
  return { idForum, menuId, title, setActiveModalHelp };
}

export default useSelectMenu;
