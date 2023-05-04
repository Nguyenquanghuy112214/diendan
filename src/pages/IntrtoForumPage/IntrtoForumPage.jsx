import React from 'react';
import PropTypes from 'prop-types';
//
import { Helmet } from 'react-helmet';
// hook
import useDocument from '~/hooks/redux/document/useDocument';
// components
import ContentInfoForum from '~/libraries/components/ContentInfoForum/ContentInfoForum';
// Css module
import classNames from 'classnames/bind';
import styles from './_IntrtoForumPage.module.scss';
const cx = classNames.bind(styles);
function IntrtoForumPage(props) {
  const { document } = useDocument();
  return (
    <div className={cx('wrapper')}>
      <Helmet>
        <title>{document.title}</title>
      </Helmet>
      <ContentInfoForum />
    </div>
  );
}

IntrtoForumPage.propTypes = {};

export default IntrtoForumPage;
