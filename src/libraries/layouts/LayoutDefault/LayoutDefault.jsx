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
import styles from './_LayoutDefault.module.scss';
import Auth from '~/middlewares/withAuthClient';
const cx = classNames.bind(styles);

function LayoutDefault({ title, children }) {
  const { setTitle } = useDocument();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    setTitle(title);
  }, [title]);
  return (
    <div>
      <div className={cx('wrapper')}>
        <div className={cx('nav')}>
          <Navbar />
        </div>
        <div className={cx('children')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default LayoutDefault;

LayoutDefault.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
