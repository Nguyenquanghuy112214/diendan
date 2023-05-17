import PropTypes from 'prop-types';
// animotion
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '~/constants/motion';
// css module
import classNames from 'classnames/bind';
import styles from './_TypingText.module.scss';
const cx = classNames.bind(styles);

export const TypingText = ({ title, y, time }) => (
  <motion.p variants={textContainer(time)} className={cx('title-helper')}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2(y)} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

TypingText.propTypes = {
  title: PropTypes.string,
  y: PropTypes.number,
  time: PropTypes.number,
};
