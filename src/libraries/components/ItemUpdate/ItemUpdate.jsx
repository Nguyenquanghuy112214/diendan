import React, { useState } from 'react';
import PropTypes from 'prop-types';
// thu vien animation
import { motion } from 'framer-motion';
// animation
import { planetVariants, staggerContainer } from '~/constants/motion';
// img
import { imgUpdate } from '~/assets/img/updatedpage';
// Css module
import classNames from 'classnames/bind';
import styles from './_ItemUpdate.module.scss';
const cx = classNames.bind(styles);
function ItemUpdate(props) {
  const [indexActive, setIndexActive] = useState();
  console.log('indexActive', indexActive);
  const data = [
    { id: 1, title: 'Bài giảng đã tải lên' },
    { id: 2, title: 'Giáo án đã tải lên' },
    { id: 3, title: 'Đề thi & Kiểm tra đã tải lên' },
    { id: 4, title: 'Tư liệu đã tải lên' },
    { id: 5, title: 'Tài liệu E-learning đã tải lên' },
  ];

  const handleClick = (index) => {
    if (indexActive === index) {
      setIndexActive(null);
    } else {
      setIndexActive(index);
    }
  };
  return (
    <div className={cx('wrapper')}>
      {data.map((item, index) => {
        return (
          <div key={index} className={cx('list-item')}>
            <div className={cx('title-update')}>
              <div onClick={() => handleClick(index)} className={cx('title')}>
                {item.title}
              </div>
              <div className={cx('update')}>Tải dữ liệu lên</div>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0, overflow: 'hidden', marginTop: '0px' }}
              animate={{
                height: indexActive === index ? 'auto' : 0,
                opacity: indexActive === index ? 1 : 0,
                overflow: indexActive === index ? 'visible' : 'hidden',
                marginTop: indexActive === index ? '20px' : '0px',
              }}
              transition={{
                duration: 0.3,
              }}
              className={cx('wrapper-listitem')}
            >
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

const Item = () => {
  const { iconpublic, iconprivate, iconcourseware } = imgUpdate;

  return (
    <div className={cx('wrapper-item')}>
      <div className={cx('content-left')}>
        <div className={cx('img')}>
          <img src={iconcourseware} alt="" />
        </div>
        <div className={cx('title-auth-date')}>
          <div className={cx('title-sub')}>Bài giảng số 1</div>
          <div className={cx('auth-date')}>
            <div className={cx('auth')}>Tác giả</div>
            <div className={cx('date')}>17 Apr, 2023</div>
          </div>
        </div>
      </div>
      <div className={cx('content-right')}>
        <div className={cx('access-rights')}>
          Công khai
          <img src={iconpublic} alt="" />
        </div>
      </div>
    </div>
  );
};
ItemUpdate.propTypes = {};

export default ItemUpdate;
