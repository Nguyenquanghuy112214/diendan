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
  const { logo } = imgLayoutNoNavbar;
  const data = [{ title: 'Trang chủ' }, { title: 'Tài liệu', path: routePath.dashboardpage }, { title: 'Bài viết' }, { title: 'Về chúng tôi' }];
  const handleLogin = () => {
    navigate(routePath.login);
  };
  const handleRegister = () => {
    navigate(routePath.register);
  };
  const handleClick = (menu) => {
    navigate(menu.path);
  };
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className={cx('wrapper')}>
      <div onClick={() => navigate(routePath.dashboardpage)} className={cx('logo')}>
        <TypingText title="BKTForum" />
        <motion.img variants={zoomIn(0.6, 2)} src={logo} alt="" />
      </div>
      {location.pathname === routePath.introforum && (
        <div className={cx('menu')}>
          {data.map((menu, index) => {
            return (
              <div onClick={() => handleClick(menu)} key={index} className={cx('item')}>
                {menu.title}
              </div>
            );
          })}
          <div className={cx('wrapper-button')}>
            <Button onClick={handleLogin} outline>
              Đăng nhập
            </Button>
            <Button onClick={handleRegister} primary>
              Đăng ký
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

HeaderNoNavbar.propTypes = {};

export default HeaderNoNavbar;
