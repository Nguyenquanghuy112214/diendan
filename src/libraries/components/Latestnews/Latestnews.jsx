import React, { useState } from 'react';
import PropTypes from 'prop-types';
// router-dom
import { useNavigate, useParams } from 'react-router-dom';
// img
import { imgNewsPage } from '~/assets/img/newspage';
// date
import 'moment/locale/vi';
import moment from 'moment';
//
import { Interweave } from 'interweave';
// Css module
import classNames from 'classnames/bind';
import styles from './_Latestnews.module.scss';
const cx = classNames.bind(styles);
function Latestnews({ listNews }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('latest-news')}>Latest news</div>
      <div className={cx('list-news')}>
        {listNews?.map((item, index) => (
          <NewsItem key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export const NewsItem = ({ item, index }) => {
  const navigate = useNavigate();
  const { imgnews } = imgNewsPage;
  const { idnews } = useParams();
  const [img, setImg] = useState([]);
  const handleError = () => {
    setImg((img) => [...img, index]);
  };

  const handleNextPage = () => {
    navigate(`/newsdetailpage/${idnews}`);
  };
  return (
    <div className={cx('wrapper-item')}>
      <div className={cx('img')}>
        <img
          onClick={handleNextPage}
          onError={() => handleError()}
          src={img.filter((x) => +x === +index) ? imgnews : item.thumbnail}
          alt=""
        />
      </div>
      <div className={cx('wrapper-cate-date')}>
        <div className={cx('cate')}>Category</div>
        <div className={cx('date')}>{item.createdOnDate === null ? 'No date' : moment(item?.createdOnDate).format('Do-MM-YYYY')}</div>
      </div>
      <div className={cx('description')}>
        <Interweave content={item?.description} />
      </div>
    </div>
  );
};
Latestnews.propTypes = {};

export default Latestnews;
