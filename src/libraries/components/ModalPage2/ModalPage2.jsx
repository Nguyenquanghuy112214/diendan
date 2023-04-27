import React from 'react';
import PropTypes from 'prop-types';
// react-icon
import { AiOutlineArrowDown } from 'react-icons/ai';
// img
import iconleft from '~/assets/img/menu/iconleft.png';
// redux
import useCloseModal from '~/hooks/redux/closemodal/useCloseModal';
// Css module
import classNames from 'classnames/bind';
import styles from './_ModalPage2.module.scss';
const cx = classNames.bind(styles);
function ModalPage2() {
  const data = ['MẦM NON', 'TIỂU HỌC', 'TRUNG HỌC CƠ SỞ', 'TRUNG HỌC PHỔ THÔNG', 'KHÁC'];
  const { isActiveModal, setActiveModal } = useCloseModal();
  const closeModal = () => {
    setActiveModal(false);
  };
  return (
    <div className={cx('wrapper', 'wrapper-modalpage', 'animationscroll', 'p40')}>
      <div className={cx('list-item')}>
        {data.map((item, index) => (
          <div key={index} className={cx('item')}>
            <img src={iconleft} alt="" />
            {item}
          </div>
        ))}
      </div>
      <div className={cx('chose-folder')}>
        <div className={cx('folder')}>
          Thư mục nhập liệu <span>Gốc {'>'} ...</span>
        </div>
        <div className={cx('no-access')}>
          <AiOutlineArrowDown />
          Thư mục không cho phép đưa bài, hãy nhấn "Chọn thư mục khác" và chọn một thư mục con
          <AiOutlineArrowDown />
        </div>
      </div>
      <div className={cx('button-chose')}>
        <span>Chọn thư mục</span> | <span onClick={closeModal}>Đóng</span>
      </div>
    </div>
  );
}

ModalPage2.propTypes = {
  active: PropTypes.bool,
};

export default ModalPage2;
