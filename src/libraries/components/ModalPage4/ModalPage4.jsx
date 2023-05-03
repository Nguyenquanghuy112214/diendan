import React from 'react';
import PropTypes from 'prop-types';
// img
import { imgModal } from '~/assets/img/modal';
// Css module
import classNames from 'classnames/bind';
import styles from './_ModalPage4.module.scss';
const cx = classNames.bind(styles);
function ModalPage4(props) {
  const { closefile } = imgModal;
  return (
    <div className={cx('wrapper', 'wrapper-modalpage', 'animationscroll', 'p40')}>
      <div className={cx('title')}>
        Thư mục nhập liệu{' '}
        <span>
          : Gốc {'>'} TIỂU HỌC {'>'} Bộ Sách Cánh Diều {'>'} Lớp 2 {'>'} Toán
        </span>
      </div>
      <div className={cx('wrapper-upload')}>
        <div className={cx('title-upload')}>Uploading files</div>
        <div className={cx('input-file')}>
          your-file.PDF
          <div className={cx('img')}>
            <img src={closefile} alt="" />
          </div>
        </div>
        <div className={cx('button')}>
          <button>UPLOADING</button>
        </div>
      </div>
    </div>
  );
}

ModalPage4.propTypes = {};

export default ModalPage4;
