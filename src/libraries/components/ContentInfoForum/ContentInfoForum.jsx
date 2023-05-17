import React from 'react';
import PropTypes from 'prop-types';
// bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// thu vien animation
import { motion } from 'framer-motion';
// animation
import { staggerContainer, tranformX, zoomIn } from '~/constants/motion';
// component
import Button from '~/libraries/form/button/Button';
// img
import { imgLayoutNoNavbar } from '~/assets/img/layoutnonavbar';
// Css module
import classNames from 'classnames/bind';
import styles from './_ContentInfoForum.module.scss';
const cx = classNames.bind(styles);
function ContentInfoForum() {
  const { nvmain, nvsub, vach, mail, calendar } = imgLayoutNoNavbar;
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={cx('wrapper')}
    >
      <Container>
        <Row>
          <Col>
            <motion.div className={cx('title')}>
              Thảo luận - Chia sẻ -
              <br />
              Học hỏi cùng cộng đồng
              <br />
              giáo dục
            </motion.div>
            <div className={cx('sub')}>
              Giáo dục là sức mạnh, và forum giáo dục là nơi
              <br />
              giúp bạn truyền tải sức mạnh đó đến cộng đồng.
            </div>
            <Button primary>Join for free</Button>
          </Col>
          <Col className={cx('right')}>
            <div className={cx('img-main')}>
              <motion.img variants={zoomIn(0.2, 3)} className={cx('nvmain')} src={nvmain} alt="" />
              <motion.div variants={tranformX(0.2, 3, true)} className={cx('calendar', 'item')}>
                <img src={calendar} alt="" />
                <div className={cx('wrapper-content')}>
                  <div className={cx('content1')}>250k</div>
                  <div className={cx('content2')}>Assisted Student</div>
                </div>
              </motion.div>
              <motion.div variants={tranformX(0.4, 3, false)} className={cx('vach')}>
                <img src={vach} alt="" />
              </motion.div>
              <motion.div variants={tranformX(0.4, 3, false)} className={cx('mail', 'item')}>
                <img src={mail} alt="" />
                <div className={cx('wrapper-content')}>
                  <div className={cx('content1')}>Congratulations</div>
                  <div className={cx('content2')}>Your admission completed</div>
                </div>
              </motion.div>
              <motion.div variants={tranformX(0.6, 3, true)} className={cx('nv-sub', 'item')}>
                <img src={nvsub} alt="" />
                <div className={cx('wrapper-content')}>
                  <div className={cx('content1')}>User Experience Class</div>
                  <div className={cx('content2')}>Today at 12.00 PM</div>
                  <div className={cx('button')}>
                    <Button large join>
                      Join Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

ContentInfoForum.propTypes = {};

export default ContentInfoForum;
