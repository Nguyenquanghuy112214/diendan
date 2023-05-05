import React from 'react';
import PropTypes from 'prop-types';
// react-bootstrap
import { Col, Row } from 'react-bootstrap';
// img
import { imgProfile } from '~/assets/img/profile';
// Css module
import classNames from 'classnames/bind';
import styles from './_Security.module.scss';
const cx = classNames.bind(styles);
function Security(props) {
  const { add } = imgProfile;
  return (
    <div className={cx('wrapper')}>
      <Row className={cx('row')}>
        <Col lg={7} xl={7} className={cx('left')}>
          <div className={cx('title')}>
            <span className={cx('main-title')}>Old Password</span>
            <input className={cx('sub-title')} type="password" placeholder="********" />
          </div>
          <div className={cx('title')}>
            <span className={cx('main-title')}>New Password</span>
            <input className={cx('sub-title')} type="password" placeholder="********" />
          </div>
          <div className={cx('title')}>
            <span className={cx('main-title')}>Retype Password</span>
            <input className={cx('sub-title')} type="password" placeholder="********" />
          </div>

          <button className={cx('button')}>Update Password</button>
        </Col>
      </Row>
    </div>
  );
}

Security.propTypes = {};

export default Security;
