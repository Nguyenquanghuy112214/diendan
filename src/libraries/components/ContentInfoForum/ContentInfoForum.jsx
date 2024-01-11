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

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectCreative, Pagination, Navigation, Autoplay } from 'swiper';
// Css module
import classNames from 'classnames/bind';
import styles from './_ContentInfoForum.module.scss';
const cx = classNames.bind(styles);
function ContentInfoForum() {
  const { nvmain, nvsub, vach, mail, calendar, nvmain2, tron, tron2, bay, cup } = imgLayoutNoNavbar;
  return (
    <Swiper
      autoplay={{ delay: 5000 }}
      navigation={true}
      pagination={true}
      loop={true}
      grabCursor={true}
      effect={'creative'}
      speed={2000}
      creativeEffect={{
        prev: {
          // shadow: true,
          translate: ['-200%', 500, -1000],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      modules={[EffectCreative, Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={cx('wrapper')}
        >
          <Container>
            <Row>
              <Col className={cx('wrapper-col')}>
                <motion.div className={cx('title')}>
                  Học một kỹ năng mới Hàng
                  <br />
                  ngày, mọi lúc và mọi nơi.
                </motion.div>
                <div className={cx('sub')}>
                  <strong>1000+</strong> Các khóa học bao gồm tất cả các lĩnh vực công nghệ để bạn tìm hiểu và
                  <br />
                  khám phá những cơ hội mới. Học hỏi từ các chuyên gia trong ngành và đạt
                  <br />
                  được Công việc mơ ước của bạn.
                </div>
                <Button primary>Tham gia </Button>
                <Button rgt>Cách hoạt động</Button>
                <div className={cx('list-bottom')}>
                  <div className={cx('item-bottom')}>
                    <div className={cx('count', 'count1')}>1000+</div>
                    <div className={cx('title-item')}>
                      Khóa học
                      <br />
                      được chọn
                    </div>
                  </div>
                  <div className={cx('item-bottom')}>
                    <div className={cx('count', 'count2')}>5000+</div>
                    <div className={cx('title-item')}>
                      Học sinh
                      <br />
                      được đào tạo
                    </div>
                  </div>
                  <div className={cx('item-bottom')}>
                    <div className={cx('count', 'count3')}>200+</div>
                    <div className={cx('title-item')}>
                      Huấn luyện viên
                      <br />
                      chuyên nghiệp
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Col className={cx('right2')}>
            <div className={cx('img-main2')}>
              <motion.img variants={zoomIn(0.4, 3)} className={cx('nvmain2')} src={nvmain2} alt="" />
              <motion.div variants={tranformX(0.4, 3, true)} className={cx('calendar2', 'item2')}>
                <img src={bay} alt="" />
              </motion.div>
              <motion.div variants={tranformX(0.6, 3, false)} className={cx('vach2')}>
                <img src={tron2} alt="" />
              </motion.div>
              <motion.div variants={tranformX(0.6, 3, false)} className={cx('mail2', 'item2')}>
                <img src={cup} alt="" />
              </motion.div>
              <motion.div variants={tranformX(0.8, 3, true)} className={cx('nv-sub2', 'item2')}>
                <img src={tron} alt="" />
              </motion.div>
            </div>
          </Col>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={cx('wrapper')}
        >
          <Container>
            <Row>
              <Col className={cx('wrapper-col')}>
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
                <Button primary>Tham gia</Button>
              </Col>
            </Row>
          </Container>
          <Col className={cx('right')}>
            <div className={cx('img-main')}>
              <motion.img variants={zoomIn(0.2, 3)} className={cx('nvmain')} src={nvmain} alt="" />
              <motion.div variants={tranformX(0.2, 3, true)} className={cx('calendar', 'item')}>
                <img src={calendar} alt="" />
                <div className={cx('wrapper-content')}>
                  <div className={cx('content1')}>250k</div>
                  <div className={cx('content2')}>Học sinh được hỗ trợ</div>
                </div>
              </motion.div>
              <motion.div variants={tranformX(0.4, 3, false)} className={cx('vach')}>
                <img src={vach} alt="" />
              </motion.div>
              <motion.div variants={tranformX(0.4, 3, false)} className={cx('mail', 'item')}>
                <img src={mail} alt="" />
                <div className={cx('wrapper-content')}>
                  <div className={cx('content1')}>Chức mừng</div>
                  <div className={cx('content2')}>Bạn đã hoàn thành nhập học</div>
                </div>
              </motion.div>
              <motion.div variants={tranformX(0.6, 3, true)} className={cx('nv-sub', 'item')}>
                <img src={nvsub} alt="" />
                <div className={cx('wrapper-content')}>
                  <div className={cx('content1')}>Lớp học trải nghiệm</div>
                  <div className={cx('content2')}>1 giờ trưa nay</div>
                  <div className={cx('button')}>
                    <Button large join>
                      Tham gia ngay
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </Col>
        </motion.div>
      </SwiperSlide>
    </Swiper>
  );
}

ContentInfoForum.propTypes = {};

export default ContentInfoForum;
