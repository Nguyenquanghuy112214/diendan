import React from 'react';
import PropTypes from 'prop-types';
//
import { useNavigate } from 'react-router-dom';
import { routePath } from '~/routing/pathRouting';
// reacticon
import { AiFillEye } from 'react-icons/ai';
// redux
import useCloseModal from '~/hooks/redux/closemodal/useCloseModal';
// img
import { imgListDataSearch } from '~/assets/img/listdatasearch';
// thu vien animation
import { motion } from 'framer-motion';
// animation
import { staggerContainer, opacity } from '~/constants/motion';
// Css module
import classNames from 'classnames/bind';
import styles from './_ListResultSearch.module.scss';
const cx = classNames.bind(styles);

function ListResultSearch() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper2')}>
        <div className={cx('title')}>Thư viện Tài Liệu</div>
        <div className={cx('list')}>
          <ListRusult />
          <ListRusult />
          <ListRusult />
          <ListRusult />
          <ListRusult />
          <ListRusult />
          <ListRusult />
        </div>
      </div>
    </div>
  );
}

ListResultSearch.propTypes = {};

const ListRusult = () => {
  const { setActiveModal } = useCloseModal();
  const postDocument = () => {
    setActiveModal(true);
  };
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={cx('wrapper-listresult')}
    >
      <motion.div variants={opacity(0.1, 1)} className={cx('wrapper-title')}>
        <div className={cx('title-listime')}>MẦM NON (10000 Bài)</div>
        <div className={cx('wrapper-nivigate')}>
          <span>Xem tất cả</span> | <span onClick={postDocument}>Đưa bài giảng lên</span>
        </div>
      </motion.div>
      <motion.div variants={opacity(0.2, 1)} className={cx('wrapper-list')}>
        <ItemResule />
        <ItemResule />
        <ItemResule />
        <ItemResule />
        <ItemResule />
      </motion.div>
    </motion.div>
  );
};

const ItemResule = () => {
  const { bgitem } = imgListDataSearch;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(routePath.detaildocument);
  };
  return (
    <div className={cx('wrapper-item')}>
      <div onClick={handleClick} className={cx('img')}>
        <img src={bgitem} alt="" />
      </div>
      <div className={cx('view')}>
        1200
        <AiFillEye />
      </div>
      <div className={cx('body')}>
        <div onClick={handleClick} className={cx('title-item')}>
          Toán lớp 1 _ Bài 1
        </div>
        <div className={cx('described')}>Phép cộng phậm vi 100</div>
        <div className={cx('auth-time')}>
          <span>Quang Huy</span>
          <span>9/25/2015</span>
        </div>
      </div>
    </div>
  );
};

export default ListResultSearch;
