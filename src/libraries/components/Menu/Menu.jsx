import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
// router-dom
import { useNavigate } from 'react-router-dom';
// call api
import * as FetchMenu from '~/utils/fetchapi/FetchMenu';
// menu
import { menuData, menuHistory, menuOther } from '~/constants/menu';
// components
import Loading from '../AnimationLoading/Animationloading';
// thu vien animation
import { motion } from 'framer-motion';
// animation
import { planetVariants, staggerContainer } from '~/constants/motion';

// Css module
import classNames from 'classnames/bind';
import styles from './_Menu.module.scss';
const cx = classNames.bind(styles);
function Menu() {
  const [menu, setMenu] = useState([]);
  // Call API
  useEffect(() => {
    const fetch = async () => {
      const menuFetch = await FetchMenu.fetchMenu();
      setMenu([
        {
          itemId: 100,
          title: 'Thư mục cấp học',
          hiddenMenu: false,
          active: true,
          children: [...menuFetch.data],
        },
      ]);
    };
    fetch();
  }, []);

  return (
    <>
      <Loading fixed opa={0.6} active={menu !== undefined && menu.length === 0} />
      <ul className={cx('menu')}>
        {menuData.map((item, indexmenu) => (
          <MenuItemFakerData key={indexmenu} item={item} />
        ))}
      </ul>
      <ul className={cx('menu')}>
        {menu.map((item, indexmenu) => (
          <MenuItem key={indexmenu} item={item} />
        ))}
      </ul>
      <ul className={cx('menu')}>
        {menuHistory.map((item, indexmenu) => (
          <MenuItemFakerData key={indexmenu} item={item} />
        ))}
      </ul>
      <ul className={cx('menu')}>
        {menuOther.map((item, indexmenu) => (
          <MenuItemFakerData key={indexmenu} item={item} />
        ))}
      </ul>
    </>
  );
}

export default Menu;

const MenuItem = ({ item }) => {
  const naviagte = useNavigate();
  const [itemActive, setItemActive] = useState();
  const [count, setCount] = useState(0);

  const handleClick = (item) => {
    naviagte(item.path);
    if (+item.itemId !== +itemActive && +item.level === 0) {
      setItemActive(item.itemId);
      setCount(count + 1);
    } else if (+item.itemId === +itemActive && +item.level === 0) {
      setItemActive(undefined);
    }
  };
  if (item.children) {
    return (
      <motion.li variants={staggerContainer} initial="hidden" animate="show" className={cx('menu-item')}>
        <div onClick={() => handleClick(item)} className={cx('title', `${+itemActive === +item.itemId ? 'active' : '-'}`)}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
        <motion.ul variants={planetVariants(+itemActive === +item.itemId || item.active)}>
          {item.children.map((child, indexchild) => (
            <MenuItem key={indexchild} item={child} />
          ))}
        </motion.ul>
      </motion.li>
    );
  } else {
    return (
      <li className={cx('menu-item')}>
        <div className={cx('title')}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
      </li>
    );
  }
};

const MenuItemFakerData = ({ item }) => {
  const [itemActive, setItemActive] = useState(null);

  const handleClick = (item) => {
    if (+item.itemId !== +itemActive) {
      setItemActive(item.itemId);
    } else {
      setItemActive(undefined);
    }
  };
  if (item.children) {
    return (
      <motion.li variants={staggerContainer} initial="hidden" animate="show" className={cx('menu-item')}>
        <div onClick={() => handleClick(item)} className={cx('title', `${+itemActive === +item.itemId ? 'active' : '-'}`)}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
        <motion.ul variants={planetVariants(+itemActive === +item.itemId || item.active)}>
          {item.children.map((child, indexchild) => (
            <MenuItem key={indexchild} item={child} />
          ))}
        </motion.ul>
      </motion.li>
    );
  } else {
    return (
      <li className={cx('menu-item')}>
        <div className={cx('title')}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
      </li>
    );
  }
};

MenuItem.propTypes = {
  item: PropTypes.object,
};
