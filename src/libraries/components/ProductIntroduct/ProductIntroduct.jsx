import React from 'react';
import PropTypes from 'prop-types';
// react-icon
import { AiOutlineArrowRight } from 'react-icons/ai';
// img
import { imgProductIntro } from '~/assets/img/productintroduct';
// components
import Section from '../Section/Section';
// animation
import { motion } from 'framer-motion';
import { staggerContainer, tranformY, zoomIn } from '~/constants/motion';
// Css module
import classNames from 'classnames/bind';
import styles from './_ProductIntroduct.module.scss';
const cx = classNames.bind(styles);
function ProductIntroduct() {
  const { img1, img2, img3 } = imgProductIntro;
  const data = [
    {
      img: img1,
      title: 'Phần mềm tiếng anh cho trẻ BKT SmartKids',
      link: 'https://smartkids.bkt.net.vn',
    },
    {
      img: img2,
      title: 'Phần mềm hỗ trợ soạn thảo thông minh  BKT SmartElearning',
      link: 'https://smartenglish.bkt.net.vn',
    },
    {
      img: img3,
      title: 'Phần mềm hỗ trợ soạn thảo thông minh  BKT SmartElearning',
      link: 'https://lib.bkt.net.vn',
    },
  ];
  return (
    <div className={cx('wrapper')}>
      <Section title="Giới thiệu sản phẩm" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={cx('list-item')}
      >
        {data.map((item, index) => {
          return <ProfileComItem key={index} data={item} />;
        })}
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={cx('button')}
      >
        <motion.button variants={zoomIn(0.2, 2)}>Xem toàn bộ sản phẩm</motion.button>
      </motion.div>
    </div>
  );
}

const ProfileComItem = ({ data }) => {
  return (
    <motion.div variants={tranformY(0.1, 1, true)} className={cx('wrapper-item')}>
      <div className={cx('img')}>
        <img src={data.img} alt="" />
      </div>
      <div className={cx('content')}>
        <div className={cx('title')}>{data.title}</div>
        <div className={cx('sub-title')}>{data.subtitle}</div>
      </div>
      <a href={data.link} className={cx('read-more')}>
        Xem thêm
        <span>
          <AiOutlineArrowRight />
        </span>
      </a>
    </motion.div>
  );
};

ProductIntroduct.propTypes = {};

export default ProductIntroduct;
