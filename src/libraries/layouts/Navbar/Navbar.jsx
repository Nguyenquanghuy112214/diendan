import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// img
import logo from '~/assets/img/logo.png';
// Css module
import classNames from 'classnames/bind';
import styles from './_Navbar.module.scss';
import Menu from '~/libraries/components/Menu/Menu';
const cx = classNames.bind(styles);

function Navbar() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, [1000]);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="navbar">
      <div className={cx('logo-title')}>
        <div className={cx('logo')}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={cx('wrapper-menu', `${active ? 'animation' : ''}`)}>
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {};
