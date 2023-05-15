import React from 'react';
import PropTypes from 'prop-types';
// img
import { imgNewsPage } from '~/assets/img/newspage';
// Css module
import classNames from 'classnames/bind';
import styles from './_Latestnews.module.scss';
const cx = classNames.bind(styles);
function Latestnews() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className={cx('wrapper')}>
      <div className={cx('latest-news')}>Latest news</div>
      <div className={cx('list-news')}>
        {data?.map((item, index) => (
          <NewsItem key={index} />
        ))}
      </div>
    </div>
  );
}

export const NewsItem = () => {
  const { imgnews } = imgNewsPage;

  return (
    <div className={cx('wrapper-item')}>
      <div className={cx('img')}>
        <img src={imgnews} alt="" />
      </div>
      <div className={cx('wrapper-cate-date')}>
        <div className={cx('cate')}>Category</div>
        <div className={cx('date')}>November 22, 2021</div>
      </div>
      <div className={cx('description')}>Pitch termsheet backing validation focus release.</div>
    </div>
  );
};
Latestnews.propTypes = {};

export default Latestnews;
