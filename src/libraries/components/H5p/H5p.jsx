/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/iframe-has-title */

import { useState, useEffect, useRef } from 'react';
// react-icon
import { IoIosClose } from 'react-icons/io';
// motion
import { motion, AnimatePresence } from 'framer-motion';

// css module
import classNames from 'classnames/bind';
import styles from './_H5p.module.scss';
const cx = classNames.bind(styles);

function H5p({ active, onClick, data }) {
  const ref = useRef()

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
    <motion.div
      initial={{ x: 40, opacity: 0, visibility: 'hidden' }}
      animate={{
        x: active ? 0 : 40,
        opacity: active ? 1 : 0,
        visibility: active ? 'visible' : 'hidden',

      }}
      exit={{ x: 40, opacity: 0, display: 'none' }}
      className={cx('wrapper-modal')}
    >
      {/* <Loading active={loading} /> */}
      <div style={{ position: 'relative', zIndex: 100000 }} className={cx('videoscrom')}>
        <span onClick={(e) => {
          onClick(e)
          ref.current.onPause();
        }} className={cx('close')}>
          <IoIosClose />
        </span>
        <iframe
          ref={ref}
          style={{ borderRadius: '18px' }}
          width="100%"
          height="100%"
          src={data?.fileLessonPlan}
          allowfullscreen
        />
      </div>
    </motion.div>
  );
}

export default H5p;
