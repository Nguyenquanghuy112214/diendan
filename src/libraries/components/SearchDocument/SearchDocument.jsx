import React from 'react';
import PropTypes from 'prop-types';
// imgSearch
import { imgSearch } from '~/assets/img/search';
// components
import Button from '~/libraries/form/button/Button';

// Css module
import classNames from 'classnames/bind';
import styles from './_SearchDocument.module.scss';
const cx = classNames.bind(styles);

function SearchDocument({ title }) {
  const { search } = imgSearch;
  return (
    <div className={cx('wrapper')}>
      {/* <div className={cx('title')}>{title}</div> */}
      <div className={cx('wrapper-input')}>
        <input type="text" placeholder="Tìm kiếm tài liệu..." />
        <Button search rightIcon={search}>
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
}

SearchDocument.propTypes = {
  title: PropTypes.string,
};

export default SearchDocument;
