import React from 'react';
import PropTypes from 'prop-types';
// react-icon
import { GrFormClose } from 'react-icons/gr';
// thu vien animation
import { motion, AnimatePresence } from 'framer-motion';
// animation
import { planetVariants, staggerContainer } from '~/constants/motion';
// img
import { imgToast } from '~/assets/img/toast';
// Css module
import classNames from 'classnames/bind';
import styles from './_ToastNotify.module.scss';
const cx = classNames.bind(styles);
function ToastNotify({ title, subtitle, active, success, systemerror, existemail, existname, onClick, className, ...passProps }) {
  const { imgexistemail, imgsuccess, imgexistname, imgsystemerror } = imgToast;
  const props = {
    ...passProps,
  };
  const classes = cx('wrapper', {
    [className]: className,
    success,
    systemerror,
    existemail,
    existname,
  });
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, height: '160px' }}
          animate={{
            opacity: active ? 1 : 0,
            height: active ? '160px' : 0,
          }}
          exit={{ opacity: 0 }}
          className={classes}
          {...props}
        >
          <div className={cx('icon')}>
            <img src={success ? imgsuccess : systemerror ? imgsystemerror : existemail ? imgexistemail : imgexistname} alt="" />
          </div>
          <div className={cx('content')}>
            <div className={cx('main-content')}>{title}</div>
            <div className={cx('sub-content')}>{subtitle}</div>
          </div>
          <div onClick={() => onClick()} className={cx('close')}>
            <GrFormClose />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ToastNotify.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  active: PropTypes.bool,
  success: PropTypes.bool,
  systemerror: PropTypes.bool,
  existemail: PropTypes.bool,
  existname: PropTypes.bool,
  className: PropTypes.string,
};

export default ToastNotify;
