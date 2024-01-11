import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// router-dom
import { useParams } from 'react-router-dom';
// img
import { imgNewsPage } from '~/assets/img/newspage';
// api
import * as FetchNews from '~/utils/fetchapi/FetchNews';
// moment
import moment from 'moment';
//
import { Interweave } from 'interweave';
// Css module
import classNames from 'classnames/bind';
import styles from './_NewsIntroduceDetail.module.scss';
const cx = classNames.bind(styles);
function NewsIntroduceDetail() {
  const { imgnews, imgavt } = imgNewsPage;
  const { idnews } = useParams();
  const [newsActive, setNewsActive] = useState();
  const [img, setImg] = useState(undefined);

  useEffect(() => {
    const fetch = async () => {
      const data = await FetchNews.fetchNews();
      setNewsActive(data.data.find((x) => +x.newsId === +idnews));
    };
    fetch();
  }, [idnews]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-content')}>
        <div className={cx('title')}>{newsActive?.title}</div>
        <div className={cx('description')}>
          <Interweave content={newsActive?.description} />
        </div>
        <div className={cx('img')}>
          <img src={`https://diendan.bkt.net.vn/Resourcelib/${newsActive?.thumbnail}`} alt="" />
        </div>
      </div>
      <div className={cx('wrapper-auth-date')}>
        <div className={cx('auth')}>
          Tác giả: {newsActive?.createdByUser || "Chưa có thông tin"}
          {/* <img src={imgavt} alt="" /> */}
        </div>
        <div className={cx('cate-date')}>
          <div className={cx('category')}>{newsActive?.categoryNews || "Chưa có thông tin"}</div>
          <div className={cx('date')}>
            {newsActive?.createdOnDate === null ? 'No date' : moment(newsActive?.createdOnDate).format('Do-MM-YYYY')}
          </div>
        </div>
      </div>
      <div className={cx('content')}>
        <Interweave content={newsActive?.content} />
      </div>
    </div>
  );
}

NewsIntroduceDetail.propTypes = {};

export default NewsIntroduceDetail;
