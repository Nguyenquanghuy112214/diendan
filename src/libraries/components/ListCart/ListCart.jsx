import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// call api
import * as FetchThong_Ke from '~/utils/fetchapi/FetchThong_Ke';
// components
import AnimationNumbers from '../AnimationNumbers/AnimationNumbers';
// thu vien bieu do tron
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
// img
import { imgListCart } from '~/assets/img/listcart';
// module css
import classNames from 'classnames/bind';
import styles from './_ListCart.module.scss';
const cx = classNames.bind(styles);
function ListCart(props) {
  const [data, setData] = useState();
  const { img1, img2, img3, img4 } = imgListCart;
  useEffect(() => {
    const fetch = async () => {
      const dataThongKe = await FetchThong_Ke.fetchThong_Ke();
      console.log('dataThongKe', dataThongKe);
      setData(dataThongKe?.data);
    };
    fetch();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <CartItem
        valuecircle1={40}
        valuecircle2={60}
        colorbg="#63D1D1"
        colorcircle="#82DADA"
        value={data?.lecture}
        title="Bài giảng"
        img={img1}
      />
      <CartItem
        valuecircle1={60}
        valuecircle2={40}
        colorbg="#40733383"
        colorcircle="#77996E"
        value={data?.lessonPlan}
        title="Giáo án"
        img={img2}
      />
      <CartItem
        valuecircle1={80}
        valuecircle2={20}
        colorbg="#DD8E55"
        colorcircle="#E4A577"
        value={data?.examsAndTests}
        title="Đề thi và kiểm tra"
        img={img3}
      />
      <CartItem
        valuecircle1={30}
        valuecircle2={70}
        colorbg="#D97C7C"
        colorcircle="#E19696"
        value={data?.user}
        title="Người dùng"
        img={img4}
      />
    </div>
  );
}

const CartItem = ({ valuecircle1, valuecircle2, colorbg, colorcircle, value, title, img }) => {
  const data = {
    datasets: [
      {
        data: [valuecircle1, valuecircle2],
        backgroundColor: ['#FFFFFF', colorcircle],
        hoverOffset: 1,
      },
    ],
  };

  return (
    <div style={{ background: colorbg }} className={cx('wrapper-cartitem')}>
      <div className={cx('content')}>
        <div className={cx('number')}>
          <AnimationNumbers value={value} />
        </div>
        <div className={cx('title')}>{title}</div>
      </div>
      <div className={cx('wrapper-circle')}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

ListCart.propTypes = {};
CartItem.propTypes = {
  valuecircle1: PropTypes.number,
  valuecircle2: PropTypes.number,
  colorbg: PropTypes.string,
  colorcircle: PropTypes.string,
  value: PropTypes.number,
  title: PropTypes.string,
};

export default ListCart;
