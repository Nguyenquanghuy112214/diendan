import { useState } from 'react';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { Interweave } from 'interweave';
// call Api
import * as FetchNews from '~/utils/fetchapi/FetchNews';
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
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function NewsContent() {
  const { new1, new2, new3, new4 } = imgNews;
  const [dataNews, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const dataNews = await FetchNews.fetchNews();
      setData(dataNews.data);
    };
    fetch();
  }, []);
  const data = [
    {
      fakeid: 1,
      id: dataNews !== undefined && dataNews[0] !== undefined && dataNews[0].title !== undefined && dataNews[0].newsId,
      img: new1,
      title: dataNews !== undefined && dataNews[0] !== undefined && dataNews[0].title !== undefined && dataNews[0].title,
      description: dataNews !== undefined && dataNews[0] !== undefined && dataNews[0].description !== undefined && dataNews[0].description,
      bgcolor: '#F88C3D',
      delay: 1.6,
    },
    {
      fakeid: 2,
      id: dataNews !== undefined && dataNews[1] !== undefined && dataNews[1].title !== undefined && dataNews[1].newsId,
      img: new2,
      title: dataNews !== undefined && dataNews[1] !== undefined && dataNews[1].title !== undefined && dataNews[1].title,
      description: dataNews !== undefined && dataNews[1] !== undefined && dataNews[1].description !== undefined && dataNews[1].description,
      bgcolor: '#9A3BE5',
      delay: 1.8,
    },
    {
      fakeid: 3,
      id: dataNews !== undefined && dataNews[2] !== undefined && dataNews[2].title !== undefined && dataNews[2].newsId,
      img: new3,
      title: dataNews !== undefined && dataNews[2] !== undefined && dataNews[2].title !== undefined && dataNews[2].title,
      description: dataNews !== undefined && dataNews[2] !== undefined && dataNews[2].description !== undefined && dataNews[2].description,
      bgcolor: '#2CB9A7',
      delay: 1.2,
    },
    // {
    //   id: 4,
    //   img: new4,
    //   title: 'Tin 4',
    //   bgcolor: '#1F94A5',
    //   delay: 1.4,
    // },
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
          return (
            <NewItem
              key={index}
              delay={item.delay}
              img={item.img}
              title={item.title}
              id={item.id}
              fakeid={item.fakeid}
              bgcolor={item.bgcolor}
              description={item.description}
            />
          );
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

const NewItem = ({ img, title, bgcolor, id, delay, description, fakeid }) => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate(`/news/${id}`);
  };
  return (
    <motion.div
      onClick={handleNextPage}
      variants={zoomIn(delay - 1.2, 1)}
      className={cx('wrapper-newitem', `id${fakeid ? fakeid : ''}`)}
      style={{ backgroundColor: bgcolor }}
    >
      <div className={cx('title')}>
        <img src={img} alt="" />
        {title}
      </div>
      <div className={cx('describe')}>
        <Interweave content={description} />
      </div>
    </motion.div>
  );
};
NewsContent.propTypes = {};

export default NewsContent;
