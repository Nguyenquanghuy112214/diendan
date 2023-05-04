import React from 'react';
import PropTypes from 'prop-types';
//
import { Helmet } from 'react-helmet';
//
import useDocument from '~/hooks/redux/document/useDocument';
// component
import Header from '~/libraries/layouts/Header/Header';
import DownloadedDocument from '~/libraries/components/DownloadedDocument/DownloadedDocument';
// Css module
import classNames from 'classnames/bind';
import styles from './_ProfilePage.module.scss';
const cx = classNames.bind(styles);

function ProfilePage(props) {
  const { document } = useDocument();

  return (
    <div>
      <Helmet>
        <title>{document.title}</title>
      </Helmet>
      <div className={cx('wrapper')}>
        <Header />
        <DownloadedDocument />
      </div>
    </div>
  );
}

ProfilePage.propTypes = {};

export default ProfilePage;
