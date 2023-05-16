import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
// router-dom
import { useNavigate } from 'react-router-dom';
// hook
import useSelectMenu from '~/hooks/redux/selectmenu/useSelectMenu';
import useSelectLesson from '~/hooks/redux/selectIdForGetLesson/useSelectLesson';
import useArrayMenu from '~/hooks/redux/arraymenu/useArrayMenu';

// call api
import * as FetchMenu from '~/utils/fetchapi/FetchMenu';
import * as FetchTreeFolder from '~/utils/fetchapi/FetchTreeFolder';
import * as FetchLessonByIdController from '~/utils/fetchapi/FetchLessonByIdController';

// menu
import { menuHistory, menuOther } from '~/constants/menu';
// components
import Loading from '../AnimationLoading/Animationloading';
// thu vien animation
import { motion } from 'framer-motion';

// Css module
import classNames from 'classnames/bind';
import styles from './_Menu.module.scss';
const cx = classNames.bind(styles);
function Menu() {
  const { idForum } = useSelectMenu();
  const { setArrayMenu } = useArrayMenu();
  const [menu, setMenu] = useState([]);
  const [menuTree, setMenuTree] = useState([]);
  // Call API
  useEffect(() => {
    const fetch = async () => {
      const menuFetch = await FetchMenu.fetchMenu();
      setArrayMenu(menuFetch);
      setMenu([
        {
          title: 'Danh mục',
          hiddenMenu: false,
          active: true,
          children: [...menuFetch],
        },
      ]);
    };
    fetch();
  }, []);
  console.log('idForum', idForum);
  useEffect(() => {
    const fetch = async () => {
      const dataMenuTree = await FetchTreeFolder.fetchTreeFolder(idForum);

      setMenuTree([
        {
          title: 'Thư mục cấp học',
          hiddenMenu: false,
          active: true,
          children: [...dataMenuTree.data],
        },
      ]);
    };

    fetch();
    if (idForum === null) {
      setMenuTree([]);
    }
  }, [idForum]);

  return (
    <>
      <Loading fixed opa={0.6} active={menu !== undefined && menu.length === 0} />
      <ul className={cx('menu')}>{menu !== undefined && menu.map((item, indexmenu) => <MenuNoLv key={indexmenu} item={item} />)}</ul>
      <ul className={cx('menu')}>
        {menuTree !== undefined && menuTree.map((item, indexmenu) => <MenuItemLv0 key={indexmenu} indexmenu={indexmenu} item={item} />)}
      </ul>
      <ul className={cx('menu')}>
        {menuHistory.map((item, indexmenu) => (
          <MenuNoLv key={indexmenu} item={item} />
        ))}
      </ul>
      <ul className={cx('menu')}>
        {menuOther.map((item, indexmenu) => (
          <MenuNoLv key={indexmenu} item={item} />
        ))}
      </ul>
    </>
  );
}

export default Menu;

const MenuNoLv = ({ item }) => {
  const { setIdChangeLesson } = useSelectLesson();
  const { menuId, setActiveModalHelp } = useSelectMenu();

  const naviagte = useNavigate();

  const handleClick = (item) => {
    console.log('sd', item);
    setIdChangeLesson({
      idController: item.idController,
    });
    setActiveModalHelp({ idController: item.idController, menuId: item.menuId, title: item.title });
    naviagte(item.path);
  };
  if (item.children) {
    return (
      <li className={cx('menu-item')}>
        <div onClick={() => handleClick(item)} className={cx('title', `${menuId === +item.menuId ? 'active' : '-'}`)}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
        <ul>
          {item.children.map((child, indexchild) => (
            <MenuNoLv key={indexchild} item={child} />
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li onClick={() => handleClick(item)} className={cx('menu-item')}>
        <div className={cx('title', `${menuId === +item.menuId ? 'active' : '-'}`)}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
      </li>
    );
  }
};

const MenuItemLv0 = ({ item }) => {
  const { menuId } = useSelectMenu();
  const { setIdChangeLesson } = useSelectLesson();
  const [lv0, setLv0] = useState(null);
  const handleClick = (child) => {
    setIdChangeLesson({ idLectureCategory: child.itemId });
    if (child.level === 0 && +lv0 !== child.itemId) {
      setLv0(child.itemId);
    } else if (+lv0 === child.itemId && +lv0 === child.itemId) {
      setLv0(null);
    }
  };
  useEffect(() => {
    setLv0(null);
  }, [menuId]);
  if (item.children) {
    return (
      <li className={cx('menu-item')}>
        <div className={cx('title', `${menuId === +item.menuId ? 'active' : ''}`)}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
        <motion.ul
          initial={{ height: 0, opacity: 0, overflow: 'hidden', marginTop: '0px' }}
          animate={{
            height: item.active === true ? 'auto' : 0,
            opacity: item.active === true ? 1 : 0,
            overflow: item.active === true ? 'visible' : 'hidden',
            marginTop: item.active === true ? '20px' : '0px',
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {item.children.map((child, indexchild) => (
            <MenuItemLv1 namelv0={child.title} lv0={lv0} onClick={() => handleClick(child)} key={indexchild} item={child} />
          ))}
        </motion.ul>
      </li>
    );
  } else {
    return (
      <li className={cx('menu-item')}>
        <div className={cx('title', `${menuId === +item.menuId ? 'active' : '-'}`)}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
      </li>
    );
  }
};

const MenuItemLv1 = ({ item, onClick, lv0, namelv0 }) => {
  const { menuId } = useSelectMenu();
  const [lv1, setLv1] = useState(null);
  const handleClick2 = (child) => {
    if (child.level === 1 && +lv1 !== child.itemId) {
      setLv1(child.itemId);
    } else if (+lv1 === child.itemId && +lv1 === child.itemId) {
      setLv1(null);
    }
  };
  useEffect(() => {
    setLv1(null);
  }, [menuId]);
  const handleClick = () => {
    if (onClick) onClick();
  };

  if (item.children) {
    return (
      <li className={cx('menu-item')}>
        <div onClick={handleClick} className={cx('title', `${+lv0 === +item.itemId ? 'active' : ''}`)}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
        <motion.ul
          initial={{ height: 0, opacity: 0, overflow: 'hidden', marginTop: '0px' }}
          animate={{
            height: +lv0 === +item.itemId ? 'auto' : 0,
            opacity: +lv0 === +item.itemId ? 1 : 0,
            overflow: +lv0 === +item.itemId ? 'visible' : 'hidden',
            marginTop: +lv0 === +item.itemId ? '20px' : '0px',
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {item.children.map((child, indexchild) => (
            <MenuItemLv2
              namelv0={namelv0}
              namelv1={child.title}
              lv1={lv1}
              onClick={() => handleClick2(child)}
              key={indexchild}
              item={child}
              index={indexchild}
            />
          ))}
        </motion.ul>
      </li>
    );
  } else {
    return (
      <li onClick={handleClick} className={cx('menu-item')}>
        <div className={cx('title', `${+lv0 === +item.menuId ? 'active' : '-'}`)}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
      </li>
    );
  }
};

const MenuItemLv2 = ({ item, lv1, onClick, namelv0, namelv1 }) => {
  const { menuId } = useSelectMenu();
  const [lv2, setLv2] = useState(null);
  const handleClick2 = (child) => {
    if (child.level === 2 && +lv2 !== child.itemId) {
      setLv2(child.itemId);
    } else if (+lv2 === child.itemId && +lv2 === child.itemId) {
      setLv2(null);
    }
  };
  useEffect(() => {
    setLv2(null);
  }, [menuId]);
  const handleClick = () => {
    if (onClick) onClick();
  };
  if (item.children) {
    return (
      <li className={cx('menu-item')}>
        <div onClick={handleClick} className={cx('title', `${+lv1 === +item.itemId ? 'active' : ''}`)}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
        <motion.ul
          initial={{ height: 0, opacity: 0, overflow: 'hidden', marginTop: '0px' }}
          animate={{
            height: +lv1 === +item.itemId ? 'auto' : 0,
            opacity: +lv1 === +item.itemId ? 1 : 0,
            overflow: +lv1 === +item.itemId ? 'visible' : 'hidden',
            marginTop: +lv1 === +item.itemId ? '20px' : '0px',
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {item.children.map((child, indexchild) => (
            <MenuItemLv3
              namelv0={namelv0}
              namelv1={namelv1}
              namelv2={child.title}
              lv2={lv2}
              onClick={() => handleClick2(child)}
              key={indexchild}
              item={child}
              index={indexchild}
            />
          ))}
        </motion.ul>
      </li>
    );
  } else {
    return (
      <li onClick={handleClick} className={cx('menu-item', `${+lv1 === +item.itemId ? 'active' : ''}`)}>
        <div className={cx('title')}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
      </li>
    );
  }
};

const MenuItemLv3 = ({ item, lv2, onClick, namelv0, namelv1, namelv2 }) => {
  const { title, idForum } = useSelectMenu();
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) onClick();
    navigate(`/detaildocument/${idForum}/${title}/${namelv0}/${namelv1}/${namelv2}/${item.itemId}`);
  };

  if (item.children) {
    return (
      <li className={cx('menu-item')}>
        <div onClick={handleClick} className={cx('title', `${+lv2 === +item.itemId ? 'active' : ''}`)}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
        <motion.ul
          initial={{ height: 0, opacity: 0, overflow: 'hidden', marginTop: '0px' }}
          animate={{
            height: +lv2 === +item.itemId ? 'auto' : 0,
            opacity: +lv2 === +item.itemId ? 1 : 0,
            overflow: +lv2 === +item.itemId ? 'visible' : 'hidden',
            marginTop: +lv2 === +item.itemId ? '20px' : '0px',
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {/* {item.children.map((child, indexchild) => (
            <MenuItemLv3 key={indexchild} item={child} index={indexchild} />
          ))} */}
        </motion.ul>
      </li>
    );
  } else {
    return (
      <li className={cx('menu-item', `${+lv2 === +item.itemId ? 'active' : ''}`)}>
        <div className={cx('title')}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
      </li>
    );
  }
};
