import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// react-router-dom
import { useNavigate, useParams } from 'react-router-dom';

// img
import { imgNewsPage } from '~/assets/img/newspage';
// interweave
import { Interweave } from 'interweave';
// date
import moment from 'moment';
// Css module
import classNames from 'classnames/bind';
import styles from './_NewsIntroduce.module.scss';
const cx = classNames.bind(styles);
function NewsIntroduce({ newsActive }) {
  const navigate = useNavigate();
  const { idnews } = useParams();
  const { imgnews, imgavt } = imgNewsPage;

  const handleNextPage = () => {
    navigate(`/newsdetailpage/${idnews}`);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>{newsActive?.title}</div>
      <div className={cx('wrapper-left-right')}>
        <div className={cx('left')}>
          <div className={cx('img')}>
            <img onClick={handleNextPage} src={`https://diendan.bkt.net.vn/Resourcelib/${newsActive?.thumbnail}`} alt="" />
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('wrapper-category-date')}>
            <div className={cx('category')}>{newsActive?.categoryNews || "Chưa có thông tin"}</div>
            <div className={cx('date')}>
              {' '}
              {newsActive?.createdOnDate === null ? 'No date' : moment(newsActive?.createdOnDate).format('Do-MM-YYYY')}
            </div>
          </div>
          <div className={cx('description')}>
            <Interweave content={newsActive?.description} />
          </div>
          <div className={cx('auth')}>
            Tác giả: {newsActive?.createdByUser || "Chưa có thông tin"}
            {/* <img src={imgavt} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

NewsIntroduce.propTypes = {
  newsActive: PropTypes.object,
};

export default NewsIntroduce;
