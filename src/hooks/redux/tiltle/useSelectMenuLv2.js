import { useSelector } from 'react-redux';
import useSelectMenuLv0 from '../selectmenulv0/useSelectMenuLv0';
import useSelectMenuLv1 from '../selectmenulv1/useSelectMenuLv1';
import useSelectMenuLv2 from '../selectmenulv2/useSelectMenuLv2';

function useTitle() {
  const { setMenuLv0 } = useSelectMenuLv0();
  const { setMenuLv1 } = useSelectMenuLv1();
  const { setMenuLv2 } = useSelectMenuLv2();
  const titlelv0 = useSelector((state) => state.menulv0.menulv0.title);
  const titlelv1 = useSelector((state) => state.menulv1.menulv1.title);
  const titlelv2 = useSelector((state) => state.menulv2.menulv2.title);
  return { titlelv0, titlelv1, titlelv2, setMenuLv0, setMenuLv1, setMenuLv2 };
}

export default useTitle;
