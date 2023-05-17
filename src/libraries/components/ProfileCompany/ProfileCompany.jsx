import React from 'react';
import PropTypes from 'prop-types';
// img
import { imgProfileCompany } from '~/assets/img/profilecompany';
// components
import Section from '../Section/Section';
// animation
import { motion } from 'framer-motion';
import { staggerContainer, tranformY } from '~/constants/motion';
// Css module
import classNames from 'classnames/bind';
import styles from './_ProfileCompany.module.scss';
const cx = classNames.bind(styles);
function ProfileCompany() {
  const { bt, mn, ck } = imgProfileCompany;
  const data = [
    {
      img: bt,
      title: '30 clients',
      subtitle: 'Content 1',
      color: '#FCBE0035',
    },
    {
      img: mn,
      title: '3,5 M+',
      subtitle: 'Content 1',
      color: '#D3E5FD',
    },
    {
      img: ck,
      title: '43,7 M+',
      subtitle: 'Content 13',
      color: '#9A3BE522',
    },
  ];
  return (
    <div className={cx('wrapper')}>
      <Section
        title="Thông tin công ty"
        subtitle1="Une agence de jeunes passionnés par le digital et répondent"
        subtitle2="sur-mesure à votre problématiques de croissance "
      />
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
    </div>
  );
}

const ProfileComItem = ({ data }) => {
  return (
    <motion.div variants={tranformY(0.1, 1, true)} className={cx('wrapper-item')}>
      <div style={{ backgroundColor: data.color }} className={cx('circle')}>
        <div className={cx('img')}>
          <img src={data.img} alt="" />
        </div>
      </div>

      <div className={cx('content')}>
        <div className={cx('content-main')}>{data.title}</div>
        <div className={cx('content-sub')}>{data.subtitle}</div>
      </div>
    </motion.div>
  );
};

ProfileCompany.propTypes = {};

export default ProfileCompany;
