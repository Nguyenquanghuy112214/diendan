import React from 'react';
import PropTypes from 'prop-types';
// animation
import { motion } from 'framer-motion';
import { staggerContainer, zoomIn } from '~/constants/motion';
// img
import { imgNews } from '~/assets/img/news';

// components
import Section from '../Section/Section';
// Css module
import classNames from 'classnames/bind';
import styles from './_NewsContent.module.scss';
const cx = classNames.bind(styles);
function NewsContent() {
  const { new1, new2, new3, new4 } = imgNews;
  const data = [
    {
      id: 1,
      img: new1,
      title: 'Tin 1',
      bgcolor: '#F88C3D',
      delay: 1.6,
    },
    {
      id: 2,
      img: new2,
      title: 'Tin2',
      bgcolor: '#9A3BE5',
      delay: 1.8,
    },
    {
      id: 3,
      img: new3,
      title: 'Tin 3',
      bgcolor: '#2CB9A7',
      delay: 1.2,
    },
    {
      id: 4,
      img: new4,
      title: 'Tin 4',
      bgcolor: '#1F94A5',
      delay: 1.4,
    },
  ];
  return (
    <div className={cx('wrapper')}>
      <Section
        title="Nội dung tin tức"
        subtitle1="Une agence de jeunes passionnés par le digital et répondent"
        subtitle2="sur-mesure à votre problématiques de croissance "
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={cx('wrapper-list-news')}
      >
        {data.map((item, index) => {
          return <NewItem key={index} delay={item.delay} img={item.img} title={item.title} id={item.id} bgcolor={item.bgcolor} />;
        })}
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={cx('button')}
      >
        <motion.button variants={zoomIn(0.1, 1)}>Xem thêm</motion.button>
      </motion.div>
    </div>
  );
}

const NewItem = ({ img, title, bgcolor, id, delay }) => {
  return (
    <motion.div
      variants={zoomIn(delay - 1.2, 1)}
      className={cx('wrapper-newitem', `id${id ? id : ''}`)}
      style={{ backgroundColor: bgcolor }}
    >
      <div className={cx('title')}>
        <img src={img} alt="" />
        {title}
      </div>
      <div className={cx('describe')}>
        Nos collaborateurs, experts des moteurs de recherche Google et Bing disposent des meilleurs atouts pour vos campagnes search. Nous
        vous accompagnons et aidons à tirer le meilleur des nouveaux algorithmes, de l’automation mais aussi de l’IA Une expertise axée sur
        le pilotage à la performance de vos campagnes, une structure adaptée à votre business modèle, un suivi régulier de vos performances
        et leur bonne santé et enfin une méthodologie de test and learn constante afin de fournir des performances qui durent dans le temps.
      </div>
    </motion.div>
  );
};
NewsContent.propTypes = {};

export default NewsContent;
