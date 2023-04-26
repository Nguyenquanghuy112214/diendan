import React from 'react';
import PropTypes from 'prop-types';
// components
import SearchDocument from '../SearchDocument/SearchDocument';

// Css module
import classNames from 'classnames/bind';
import styles from './_ListDataSearch.module.scss';
const cx = classNames.bind(styles);

function ListDataSearch(props) {
  return <div className={cx('wrapper')}>{/* <SearchDocument title="Tìm Bài Giảng" /> */}</div>;
}

ListDataSearch.propTypes = {};

export default ListDataSearch;
