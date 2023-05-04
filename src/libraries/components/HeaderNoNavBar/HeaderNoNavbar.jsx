import React from 'react';
import PropTypes from 'prop-types';
// router
import { useLocation, useNavigate } from 'react-router-dom';
import { routePath } from '~/routing/pathRouting';
// component
import Button from '~/libraries/form/button/Button';
// animation
import { motion } from 'framer-motion';
import { staggerContainer, tranformY, zoomIn } from '~/constants/motion';
// motion
import { TypingText } from '../AnimationText/TypingText';
// img
import { imgLayoutNoNavbar } from '~/assets/img/layoutnonavbar';
// Css module
import classNames from 'classnames/bind';
import styles from './_HeaderNoNavbar.module.scss';
const cx = classNames.bind(styles);
function HeaderNoNavbar(props) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location', location.pathname);
  const { logo } = imgLayoutNoNavbar;
  const data = [{ title: 'Home' }, { title: 'Tài Liệu' }, { title: 'Blog' }, { title: 'About Us' }];
  const handleLogin = () => {
    navigate(routePath.login);
  };
  const handleRegister = () => {
    navigate(routePath.register);
  };
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className={cx('wrapper')}>
      <div className={cx('logo')}>
        <TypingText title="BKTForum" />
        <motion.img variants={zoomIn(0.6, 2)} src={logo} alt="" />
      </div>
      {location.pathname === routePath.introforum && (
        <div className={cx('menu')}>
          {data.map((menu, index) => {
            return (
              <div key={index} className={cx('item')}>
                {menu.title}
              </div>
            );
          })}
          <div className={cx('wrapper-button')}>
            <Button onClick={handleLogin} outline>
              Login
            </Button>
            <Button onClick={handleRegister} primary>
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

HeaderNoNavbar.propTypes = {};

export default HeaderNoNavbar;
