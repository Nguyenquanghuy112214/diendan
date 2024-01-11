import React from 'react'

// react-icon
import { IoIosClose } from 'react-icons/io';
// motion
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames/bind';
import styles from './_Video.module.scss';
import YouTube from 'react-youtube';
const cx = classNames.bind(styles);
function Video({ active, onClick, data }) {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
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
          <YouTube className={cx('videoYTB')} videoId={'si=T0CQECB7g07waaQp'} opts={opts} />

        </div>
      </motion.div>
      )
    </AnimatePresence>
  )
}

export default Video
