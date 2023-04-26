import React from 'react';
import PropTypes from 'prop-types';
// components
import { TypingText } from '../AnimationText/TypingText';
// animation
import { motion } from 'framer-motion';
import { staggerContainer, tranformY } from '~/constants/motion';
// Css module
import classNames from 'classnames/bind';
import styles from './_Section.module.scss';
const cx = classNames.bind(styles);
function Section({ title, subtitle1, subtitle2 }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={cx('wrapper')}
    >
      <div className={cx('title')}>
        <TypingText title={title} />
      </div>
      <motion.div variants={tranformY(0.5, 2)} className={cx('sub-title')}>
        {subtitle1}
        <br />
        {subtitle2}
      </motion.div>
    </motion.div>
  );
}

Section.propTypes = {};

export default Section;
