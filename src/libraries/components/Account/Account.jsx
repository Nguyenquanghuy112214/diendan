import React from 'react';
import PropTypes from 'prop-types';
// react-bootstrap
import { Col, Row } from 'react-bootstrap';
// img
import { imgProfile } from '~/assets/img/profile';
// Css module
import classNames from 'classnames/bind';
import styles from './_Account.module.scss';
const cx = classNames.bind(styles);
function Account({ data }) {
  const { add } = imgProfile;
  if (!data) return null;
  return (
    <div className={cx('wrapper')}>
      <Row className={cx('row')}>
        <Col lg={7} xl={7} className={cx('left')}>
          <div className={cx('title')}>
            <span className={cx('main-title')}>Full name</span>
            <span className={cx('sub-title')}>{data.fullName}</span>
          </div>
          <div className={cx('title')}>
            <span className={cx('main-title')}>Email</span>
            <span className={cx('sub-title')}>{data.email}</span>
          </div>
          {/* <div className={cx('title')}>
            <span className={cx('main-title')}>Username</span>
            <span className={cx('sub-title')}>nguyenquanghuy</span>
          </div> */}
          <div className={cx('title')}>
            <span className={cx('main-title')}>Phone Number</span>
            <span className={cx('sub-title')}>{data.phone || 'Chưa có thông tin'}</span>
          </div>
          <button className={cx('button')}>Update Profile</button>
        </Col>
        <Col lg={5} xl={5} className={cx('right')}>
          <div className={cx('your-picture')}>Your Profile Picture</div>
          <div className={cx('wrapper-imgadd')}>
            <img src={add} alt="" />
            <span>
              Update your
              <br />
              photo
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

Account.propTypes = {};

export default Account;
