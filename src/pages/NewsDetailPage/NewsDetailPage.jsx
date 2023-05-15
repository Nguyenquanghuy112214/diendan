import React from 'react';
import PropTypes from 'prop-types';
//
import { Helmet } from 'react-helmet';
//
import useDocument from '~/hooks/redux/document/useDocument';
// component
import Header from '~/libraries/layouts/Header/Header';
import NewsIntroduceDetail from '~/libraries/components/NewsIntroduceDetail/NewsIntroduceDetail';
// Css module
import classNames from 'classnames/bind';
import styles from './_NewsDetailPage.module.scss';
const cx = classNames.bind(styles);

function NewsDetailPage(props) {
  const { document } = useDocument();

  return (
    <div>
      <Helmet>
        <title>{document.title}</title>
      </Helmet>
      <div className={cx('wrapper')}>
        <Header />
        <NewsIntroduceDetail />
      </div>
    </div>
  );
}

NewsDetailPage.propTypes = {};

export default NewsDetailPage;
