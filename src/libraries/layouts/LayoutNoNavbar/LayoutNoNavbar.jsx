import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// Components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
//
import useDocument from '~/hooks/redux/document/useDocument';
// Css module
import classNames from 'classnames/bind';
import styles from './_LayoutNoNavbar.module.scss';
import HeaderNoNavbar from '~/libraries/components/HeaderNoNavBar/HeaderNoNavbar';
const cx = classNames.bind(styles);

function LayoutNoNavbar({ title, children }) {
  const { setTitle } = useDocument();
  useEffect(() => {
    setTitle(title);
  }, [title]);
  return (
    <div className={cx('wrapper')}>
      <HeaderNoNavbar />
      {children}
    </div>
  );
}

export default LayoutNoNavbar;

LayoutNoNavbar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
