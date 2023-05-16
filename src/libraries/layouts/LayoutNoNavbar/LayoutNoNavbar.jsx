import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// Components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// react-router-dom
import { useLocation } from 'react-router-dom';
//
import useDocument from '~/hooks/redux/document/useDocument';
// Css module
import classNames from 'classnames/bind';
import styles from './_LayoutNoNavbar.module.scss';
import HeaderNoNavbar from '~/libraries/components/HeaderNoNavBar/HeaderNoNavbar';
const cx = classNames.bind(styles);

function LayoutNoNavbar({ title, children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
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
