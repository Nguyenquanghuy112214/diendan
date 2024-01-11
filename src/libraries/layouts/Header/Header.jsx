import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
// react-icon
import { CiSearch } from 'react-icons/ci';
import { FiMenu } from 'react-icons/fi';
import { AiFillCaretDown } from 'react-icons/ai';
// components
import Button from '~/libraries/form/button/Button';
// img
import { imgHeader } from '~/assets/img/header';
// router-dom
import { useNavigate } from 'react-router-dom';
// Css module
import classNames from 'classnames/bind';
import styles from './_Header.module.scss';
import useAuth from '~/hooks/redux/auth/useAuth';
import { routePath } from '~/routing/pathRouting';
const cx = classNames.bind(styles);
function Header() {
  const navigator = useNavigate();
  const { bell, calendar, email, avatar } = imgHeader;
  const [sticky, setSticky] = useState(false);
  const { auth } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // test

  return (
    <div className={cx('wrapper', `${sticky ? 'sticky' : ''}`)}>
      {/* title */}
      <div className={cx('wrarpper-title')}>
        <div className={cx('icon-3line')}>
          <FiMenu />
        </div>
        <div className={cx('title')}>Dashboard</div>
      </div>
      <div className={cx('wrapper-search')}>
        <input type="text" placeholder="Search here..." />
        <CiSearch />
      </div>
      {/* lotyfi */}
      {auth !== undefined && auth.token !== undefined ? (
        <div className={cx('wrapper-lotify-profile')}>
          <div className={cx('wrapper-lotify')}>
            <div className={cx('bell', 'img')}>
              <img src={bell} alt="" />
              <span className={cx('bell-lotify', 'lotify')}>2</span>
            </div>
            <div className={cx('calendar', 'img')}>
              <img src={calendar} alt="" />
              <span className={cx('calendar-lotify', 'lotify')}>7</span>
            </div>
            <div className={cx('email', 'img')}>
              <img src={email} alt="" />
              <span className={cx('email-lotify', 'lotify')}>4</span>
            </div>
          </div>
          {/* profile */}
          <div className={cx('wrapper-profile')}>
            <div className={cx('img-avt')}>
              <img src={avatar} alt="" />
            </div>
            <div className={cx('wrapper-detail')}>
              <div className={cx('name')}>Quang Huy</div>
              <div className={cx('position')}>Giáo viên</div>
            </div>
            <div className={cx('icon-down')}>
              <AiFillCaretDown />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Button onClick={() => navigator(routePath.login)} small outline>
            Login
          </Button>
          <Button onClick={() => navigator(routePath.register)} primary small>
            Sign Up
          </Button>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {};

export default Header;
