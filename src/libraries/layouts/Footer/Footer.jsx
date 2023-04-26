import PropTypes from 'prop-types';
// img
import { imgFooter } from '~/assets/img/footer';
import logo from '~/assets/img/logo.png';
// components
import { TypingText } from '~/libraries/components/AnimationText/TypingText';
// animation
import { motion } from 'framer-motion';
import { staggerContainer, tranformY, zoomIn } from '~/constants/motion';
// Css module
import classNames from 'classnames/bind';
import styles from './_Footer.module.scss';
const cx = classNames.bind(styles);
function Footer() {
  const { face, imgins, imgin } = imgFooter;
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className={cx('wrapper')}>
      <motion.div className={cx('wrapper-listcol')}>
        <motion.div variants={tranformY(0.2, 2, true)} className={cx('col1')}>
          <div className={cx('logo')}>
            <img src={logo} alt="Logo" />
          </div>
          <span className={cx('slogan', 'w')}>BKT JSC - Giải pháp công nghệ thông tin tốt nhất</span>
          <span className={cx('adress-main', 'w')}>
            Trụ sở chính: Liền kề C39 Embassy Garden, Đ. Hoàng Minh Thảo, Khu đô thị Tây Hồ Tây, Bắc Từ Liêm, Hà Nội
          </span>
          <div className={cx('wrapper-platforms')}>
            <div className={cx('face', 'img')}>
              <img src={face} alt="Face" />
            </div>
            <div className={cx('ins', 'img')}>
              <img src={imgins} alt="Ins" />
            </div>
            <div className={cx('in', 'img')}>
              <img src={imgin} alt="In" />
            </div>
          </div>
        </motion.div>
        <motion.div variants={tranformY(0.2, 2, true)} className={cx('col2')}>
          <div className={cx('title', 'w')}>About</div>
          <div></div>
          <div className={cx('w', 'item')}>Account</div>
          <div className={cx('w', 'item')}>A propos</div>
          <div className={cx('w', 'item')}>Formations</div>
          <div className={cx('w', 'item')}>Blog</div>
        </motion.div>
        <motion.div variants={tranformY(0.2, 2, true)} className={cx('col3')}>
          <div className={cx('title', 'w', 'f16')}>Thư viện trực tuyến BKT FORUM 2023</div>
          <div className={cx('email')}>Email: gpsdbkt@gmail.com</div>
          <div className={cx('phone', 'w', 'f16', 'm10')}>
            <span>086 817 9599</span> - <span>0243 752 5253</span>
          </div>
          <div className={cx('adress', 'w', 'f16', 'm10')}>
            Địa chỉ ĐKKD: Liền kề C39 Embassy Garden, Đ. Hoàng Minh Thảo, Khu đô thị Tây Hồ Tây, Bắc Từ Liêm, Hà Nội
          </div>
          <div className={cx('time', 'w', 'f16', 'm10')}>Giờ làm việc : 8.00 AM – 17.30 PM</div>
        </motion.div>
      </motion.div>
      <div className={cx('coppy')}>
        <TypingText y={10} time={0.02} title="BKT JSC copyright@2023" />
      </div>
    </motion.div>
  );
}

Footer.propTypes = {};

export default Footer;
