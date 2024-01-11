import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
// router-dom
import { useLocation, useNavigate } from 'react-router-dom';
// hook
import useSelectMenu from '~/hooks/redux/selectmenu/useSelectMenu';
import useSelectLesson from '~/hooks/redux/selectIdForGetLesson/useSelectLesson';
import useArrayMenu from '~/hooks/redux/arraymenu/useArrayMenu';
import useTitle from '~/hooks/redux/tiltle/useSelectMenuLv2';

// call api
import * as FetchMenu from '~/utils/fetchapi/FetchMenu';
import * as FetchTreeFolder from '~/utils/fetchapi/FetchTreeFolder';
// hook
import useAuth from '~/hooks/redux/auth/useAuth';
// menu
import { menuHistory, menuOther } from '~/constants/menu';
// components
import Loading from '../AnimationLoading/Animationloading';
// thu vien animation
import { motion } from 'framer-motion';

// Css module
import classNames from 'classnames/bind';
import styles from './_Menu.module.scss';
import { routePath } from '~/routing/pathRouting';
const cx = classNames.bind(styles);
function Menu() {
  const { idForum } = useSelectMenu();
  const { auth } = useAuth();
  const { setMenuLv0, setMenuLv1, setMenuLv2 } = useTitle();
  const { setArrayMenu } = useArrayMenu();
  const [menu, setMenu] = useState([]);
  const [menuTree, setMenuTree] = useState([]);
  // Call API
  useEffect(() => {
    const fetch = async () => {
      const menuFetch = await FetchMenu.fetchMenu();
      const respone = menuFetch.map((item) => {
        return { ...item, path: routePath.dashboardpage };
      });
      setArrayMenu(respone);
      setMenu([
        {
          title: 'Danh mục',
          hiddenMenu: false,
          active: true,
          children: [...respone],
        },
      ]);
    };
    fetch();
  }, []);
  useEffect(() => {
    const fetch = async () => {
      const dataMenuTree = await FetchTreeFolder.fetchTreeFolder(idForum);
      if (dataMenuTree !== undefined) {
        setMenuTree([
          {
            title: 'Thư mục cấp học',
            hiddenMenu: false,
            active: true,
            children: [...dataMenuTree.data],
          },
        ]);
      } else {
        setMenuTree([]);
      }
    };

    fetch();
    if (idForum === null) {
      setMenuTree([]);
    }
  }, [idForum]);

  useEffect(() => {
    setMenuLv0({ title: null });
    setMenuLv1({ title: null });
    setMenuLv2({ title: null });
  }, [idForum]);

  return (
    <>
      <Loading fixed opa={0.6} active={menu !== undefined && menu.length === 0} />
      <ul className={cx('menu')}>{menu !== undefined && menu.map((item, indexmenu) => <MenuNoLv key={indexmenu} item={item} />)}</ul>
      <ul className={cx('menu')}>
        {menuTree !== undefined
          ? menuTree.map((item, indexmenu) => <MenuItemLv0 key={indexmenu} indexmenu={indexmenu} item={item} />)
          : null}
      </ul>
      {auth !== undefined && auth.token !== undefined && (
        <ul className={cx('menu')}>
          {menuHistory.map((item, indexmenu) => (
            <MenuNoLv key={indexmenu} item={item} />
          ))}
        </ul>
      )}
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
  const location = useLocation();
  const { setIdChangeLesson } = useSelectLesson();
  const { menuId, setActiveModalHelp } = useSelectMenu();

  const naviagte = useNavigate();

  const handleClick = (item) => {
    setIdChangeLesson({
      idController: item.idController,
    });
    setActiveModalHelp({ idController: item.idController, menuId: item.menuId, title: item.title });
    naviagte(item.path);
  };
  if (item.children) {
    return (
      <li className={cx('menu-item')}>
        <div
          onClick={() => handleClick(item)}
          className={cx('title', `${menuId === +item.menuId || location.pathname === item.subtitle ? 'active' : '-'}`)}
        >
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
  const naviagte = useNavigate();
  const [lv0, setLv0] = useState(null);

  const { menuId } = useSelectMenu();
  const { setIdChangeLesson, idController } = useSelectLesson();
  const { setMenuLv0, setMenuLv1 } = useTitle();

  const handleClick = (child) => {
    naviagte(routePath.dashboardpage);
    setMenuLv0({ title: child.title });
    setIdChangeLesson({
      idController,
      idLectureCategory: child.itemId,
    });
    if (child.level === 0 && +lv0 !== child.itemId) {
      setLv0(child.itemId);
    } else if (+lv0 === child.itemId && +lv0 === child.itemId) {
      setIdChangeLesson({
        idController,
      });
      setLv0(null);
      setMenuLv1({ title: null });
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

const MenuItemLv1 = ({ item, onClick, lv0 }) => {
  const naviagte = useNavigate();

  const [lv1, setLv1] = useState(null);
  const { menuId } = useSelectMenu();
  const { setMenuLv1, setMenuLv2, titlelv0 } = useTitle();
  const { setIdChangeLesson, idController } = useSelectLesson();

  const handleClick2 = (child) => {
    naviagte(routePath.dashboardpage);

    setMenuLv1({ title: child.title });
    setIdChangeLesson({ idLectureCategory: child.itemId, idController });

    if (child.level === 1 && +lv1 !== child.itemId) {
      setLv1(child.itemId);
    } else if (+lv1 === child.itemId && +lv1 === child.itemId) {
      setLv1(null);
      setMenuLv2({ title: null });
    }
  };

  useEffect(() => {
    setLv1(null);
  }, [menuId, titlelv0, lv0]);

  const handleClick = () => {
    naviagte(routePath.dashboardpage);

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
            <MenuItemLv2 lv1={lv1} onClick={() => handleClick2(child)} key={indexchild} item={child} index={indexchild} />
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

const MenuItemLv2 = ({ item, lv1, onClick }) => {
  const naviagte = useNavigate();

  const { menuId } = useSelectMenu();
  const { setIdChangeLesson, idController } = useSelectLesson();
  const { setMenuLv2, titlelv1 } = useTitle();
  const [lv2, setLv2] = useState(null);
  const handleClick2 = (child) => {
    naviagte(routePath.dashboardpage);

    setIdChangeLesson({ idLectureCategory: child.itemId, idController });
    setMenuLv2({ title: child.title });
    if (child.level === 2 && +lv2 !== child.itemId) {
      setLv2(child.itemId);
    } else if (+lv2 === child.itemId && +lv2 === child.itemId) {
      setLv2(null);
      setMenuLv2({ title: null });
    }
  };
  useEffect(() => {
    setLv2(null);
  }, [menuId, titlelv1, lv1]);
  const handleClick = () => {
    naviagte(routePath.dashboardpage);

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
            <MenuItemLv3 lv2={lv2} onClick={() => handleClick2(child)} key={indexchild} item={child} index={indexchild} />
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

const MenuItemLv3 = ({ item, lv2, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
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
