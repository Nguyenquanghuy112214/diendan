import React from 'react';
import PropTypes from 'prop-types';
//
import { Helmet } from 'react-helmet';
//
import useDocument from '~/hooks/redux/document/useDocument';
// component
import Header from '~/libraries/layouts/Header/Header';
import ItemUpdate from '~/libraries/components/ItemUpdate/ItemUpdate';
// Css module
import classNames from 'classnames/bind';
import styles from './_UpdatedPage.module.scss';
const cx = classNames.bind(styles);

function UpdatedPage(props) {
  const { document } = useDocument();

  return (
    <div>
      <Helmet>
        <title>{document.title}</title>
      </Helmet>
      <div className={cx('wrapper')}>
        <Header />
        <ItemUpdate />
      </div>
    </div>
  );
}

UpdatedPage.propTypes = {};

export default UpdatedPage;
