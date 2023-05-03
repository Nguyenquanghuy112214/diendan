import React from 'react';
import PropTypes from 'prop-types';
// Css module
import classNames from 'classnames/bind';
import styles from './_ModalPage5.module.scss';
const cx = classNames.bind(styles);
function ModalPage5(props) {
  return (
    <div className={cx('wrapper', 'wrapper-modalpage', 'animationscroll', 'p40')}>
      <div className={cx('content-success')}>
        Tài liệu cần phải chờ được xét duyệt
        <br />
        Vui lòng kiểm tra lại sau
      </div>
      <div className={cx('button')}>
        <button>XÁC NHẬN</button>
      </div>
    </div>
  );
}

ModalPage5.propTypes = {};

export default ModalPage5;
