/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/iframe-has-title */

import { useState, useEffect } from 'react';
// react-icon
import { IoIosClose } from 'react-icons/io';
// motion
import { motion, AnimatePresence } from 'framer-motion';

// css module
import classNames from 'classnames/bind';
import styles from './_VideoScrom.module.scss';
const cx = classNames.bind(styles);

function VideoScrom({ active, onClick, data }) {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    setLocation(window.location);
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const timeLoading = setLoading(false);
      return () => {
        clearInterval(timeLoading);
      };
    }, 2000);
  }, [window.location]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 40, opacity: 0, visibility: 'hidden' }}
        animate={{
          x: active ? 0 : 40,
          opacity: active ? 1 : 0,
          visibility: active ? 'visible' : 'hidden',
        }}
        exit={{ x: 40, opacity: 0 }}
        className={cx('wrapper-modal')}
      >
        {/* <Loading active={loading} /> */}
        <div style={{ position: 'relative', zIndex: 100000 }} className={cx('videoscrom')}>
          <span onClick={() => onClick()} className={cx('close')}>
            <IoIosClose />
          </span>
          <iframe
            style={{ borderRadius: '18px' }}
            width="100%"
            height="100%"
            src={`https://diendan.bkt.net.vn/Resourcelib/${data?.fileLessonPlan}`}
            allowfullscreen
          />
        </div>
      </motion.div>
      )
    </AnimatePresence>
  );
}

export default VideoScrom;
