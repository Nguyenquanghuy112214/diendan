import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
// react-icon
import { CiSearch } from 'react-icons/ci';
import { FiMenu } from 'react-icons/fi';
import { AiFillCaretDown } from 'react-icons/ai';
// img
import { imgHeader } from '~/assets/img/header';
// Css module
import classNames from 'classnames/bind';
import styles from './_Header.module.scss';
const cx = classNames.bind(styles);
function Header() {
  const { bell, calendar, email, avatar } = imgHeader;
  const [sticky, setSticky] = useState(false);
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
    </div>
  );
}

Header.propTypes = {};

export default Header;
