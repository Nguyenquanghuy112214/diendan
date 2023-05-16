import { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
// router-dom
import { useParams } from 'react-router-dom';
//
import { Helmet } from 'react-helmet';
//hook
import useDocument from '~/hooks/redux/document/useDocument';
// api
import * as FetchNews from '~/utils/fetchapi/FetchNews';
// component
import Header from '~/libraries/layouts/Header/Header';
import NewsIntroduce from '~/libraries/components/NewsIntroduce/NewsIntroduce';
import Latestnews from '~/libraries/components/Latestnews/Latestnews';
// Css module
import classNames from 'classnames/bind';
import styles from './_NewsPage.module.scss';
const cx = classNames.bind(styles);

function NewsPage(props) {
  const { idnews } = useParams();
  const { document } = useDocument();
  const [newsActive, setNewsActive] = useState();
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await FetchNews.fetchNews();
      setNewsActive(data.data.find((x) => +x.newsId === +idnews));
      setListNews(data.data.filter((x) => +x.newsId !== +idnews));
    };
    fetch();
  }, [idnews]);
  return (
    <div>
      <Helmet>
        <title>{document.title}</title>
      </Helmet>
      <div className={cx('wrapper')}>
        <Header />
        <NewsIntroduce newsActive={newsActive} />
        <Latestnews listNews={listNews} />
      </div>
    </div>
  );
}

NewsPage.propTypes = {};

export default NewsPage;
