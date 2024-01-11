import React from 'react';
import useDocument from '~/hooks/redux/document/useDocument';
//
import { Helmet } from 'react-helmet';
// components
import Header from '~/libraries/layouts/Header/Header';
import DetailBook from '~/libraries/components/DetailBook/DetailBook';
// Css module
import classNames from 'classnames/bind';
import styles from './_DetailDocument.module.scss';
const cx = classNames.bind(styles);

function DetailDocument() {
  const { document } = useDocument();

  return (
    <div>
      <Helmet>
        <title>{document.title}</title>
      </Helmet>
      <div className={cx('wrapper')}>
        <Header />
        <DetailBook />
      </div>
    </div>
  );
}

DetailDocument.propTypes = {};

export default DetailDocument;
