import React from 'react';
import PropTypes from 'prop-types';
// img
import { imgNewsPage } from '~/assets/img/newspage';
// Css module
import classNames from 'classnames/bind';
import styles from './_NewsIntroduce.module.scss';
const cx = classNames.bind(styles);
function NewsIntroduce() {
  const { imgnews, imgavt } = imgNewsPage;
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>Thoughts and words</div>
      <div className={cx('wrapper-left-right')}>
        <div className={cx('left')}>
          <div className={cx('img')}>
            <img src={imgnews} alt="" />
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('wrapper-category-date')}>
            <div className={cx('category')}>Category</div>
            <div className={cx('date')}>November 22, 2021</div>
          </div>
          <div className={cx('description')}>Pitch termsheet backing validation focus release.</div>
          <div className={cx('auth')}>
            <img src={imgavt} alt="" />
            Chandler Bing
          </div>
        </div>
      </div>
    </div>
  );
}

NewsIntroduce.propTypes = {};

export default NewsIntroduce;
