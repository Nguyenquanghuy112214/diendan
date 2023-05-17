import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// navigate
import { useNavigate } from 'react-router-dom';
import { routePath } from '~/routing/pathRouting';
// hook
import useSelectMenu from '~/hooks/redux/selectmenu/useSelectMenu';
import useSelectLesson from '~/hooks/redux/selectIdForGetLesson/useSelectLesson';
// img
import logo from '~/assets/img/logo.png';
// Css module
import classNames from 'classnames/bind';
import styles from './_Navbar.module.scss';
import Menu from '~/libraries/components/Menu/Menu';
const cx = classNames.bind(styles);

function Navbar() {
  const navigate = useNavigate();
  const { setActiveModalHelp } = useSelectMenu();
  const { setIdChangeLesson } = useSelectLesson();
  const [active, setActive] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, [1000]);
    return () => clearTimeout(timer);
  }, []);
  const handleClick = () => {
    navigate(routePath.dashboardpage);
    setActiveModalHelp({ idController: null, menuId: null, title: null });
    setIdChangeLesson({});
  };
  return (
    <div className="navbar">
      <div className={cx('logo-title')}>
        <div onClick={handleClick} className={cx('logo')}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={cx('wrapper-menu', `${active ? 'animationscroll' : ''}`)}>
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {};
