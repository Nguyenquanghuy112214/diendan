import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// reacticon
import { IoMdClose } from 'react-icons/io';
// img
import { imgModalNoLogin } from '~/assets/img/modalnologin';
// Components
import Button from '~/libraries/form/button/Button';
// navigate
import { useNavigate } from 'react-router-dom';
import { routePath } from '~/routing/pathRouting';
// motion
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, tranformY } from '~/constants/motion';
// Css module
import classNames from 'classnames/bind';
import styles from './_ModalNoLogin.module.scss';
const cx = classNames.bind(styles);
function ModalNoLogin({ activeHelp, onClick }) {
  const navigate = useNavigate();
  const { img1, img2 } = imgModalNoLogin;
  const handleRegister = () => {
    navigate(routePath.register);
  };
  const handleLogin = () => {
    navigate(routePath.login);
  };

  return (
    <AnimatePresence>
      {activeHelp && (
        <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" exit="exit" className={cx('modal')}>
          <motion.div variants={tranformY(0.2, 0.8, true)} className={cx('wrapper')}>
            <div onClick={() => onClick()} className={cx('icon-close')}>
              <IoMdClose />
            </div>
            <div className={cx('img1')}>
              <img src={img1} alt="" />
            </div>
            <div className={cx('title')}>Hướng dẫn tải về tài liệu</div>
            <div className={cx('sub-title')}>
              Vui lòng đăng nhập để có thể tải miễn phí tài liệu từ diễn đàn. Nếu chưa có tài khoản hãy đăng ký hoặc liên hệ bộ phận hỗ trợ
              khách hàng !
            </div>
            <div className={cx('wrapper-button')}>
              <Button onClick={handleRegister} rgt>
                Đăng ký
              </Button>
              <Button onClick={handleLogin} lg leftIcon={img2}>
                Đăng nhập
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ModalNoLogin.propTypes = {};

export default ModalNoLogin;
