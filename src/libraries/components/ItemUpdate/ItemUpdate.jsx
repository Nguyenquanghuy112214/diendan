import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// hook
import useAuth from '~/hooks/redux/auth/useAuth';
// thu vien animation
import { motion } from 'framer-motion';
// animation
import { planetVariants, staggerContainer } from '~/constants/motion';
// img
import { imgUpdate } from '~/assets/img/updatedpage';
// call api
import * as FetchHistoryUpload from '~/utils/fetchapi/FetchHistoryUpload';
import * as FetchMenu from '~/utils/fetchapi/FetchMenu';
// Css module
import classNames from 'classnames/bind';
import styles from './_ItemUpdate.module.scss';

const cx = classNames.bind(styles);
function ItemUpdate() {
  const { auth } = useAuth();
  const [idActive, setIdActive] = useState();
  const [menu, setMenu] = useState([]);
  const [dataUpdate, setDataUpdate] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const menu = await FetchMenu.fetchMenu();
      setMenu(menu);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const dataUpdate = await FetchHistoryUpload.FetchHistoryUpload(idActive, auth?.token);
      setDataUpdate(dataUpdate?.data);
    };
    if (idActive !== undefined) fetch();
  }, [idActive, auth]);

  const handleClick = (item) => {
    if (idActive === item.menuId) {
      setIdActive(null);
    } else {
      setIdActive(item.menuId);
    }
  };
  return (
    <div className={cx('wrapper')}>
      {menu?.map((item, index) => {
        return (
          <div key={index} className={cx('list-item')}>
            <div className={cx('title-update')}>
              <div onClick={() => handleClick(item)} className={cx('title')}>
                {`${item.title} đã tải lên`}
              </div>
              <div className={cx('update')}>Tải dữ liệu lên</div>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0, overflow: 'hidden', marginTop: '0px' }}
              animate={{
                height: idActive === item?.menuId ? 'auto' : 0,
                opacity: idActive === item?.menuId ? 1 : 0,
                overflow: idActive === item?.menuId ? 'visible' : 'hidden',
                marginTop: idActive === item?.menuId ? '20px' : '0px',
              }}
              transition={{
                duration: 0.3,
              }}
              className={cx('wrapper-listitem')}
            >
              {dataUpdate?.map((item, index) => {
                return <Item key={index} item={item} />;
              })}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

const Item = ({ item }) => {
  const { iconpublic, iconprivate, iconcourseware } = imgUpdate;

  return (
    <div className={cx('wrapper-item')}>
      <div className={cx('content-left')}>
        <div className={cx('img')}>
          <img src={iconcourseware} alt="" />
        </div>
        <div className={cx('title-auth-date')}>
          <div className={cx('title-sub')}>Bài giảng số 1</div>
          <div className={cx('auth-date')}>
            <div className={cx('auth')}>Tác giả</div>
            <div className={cx('date')}>17 Apr, 2023</div>
          </div>
        </div>
      </div>
      <div className={cx('content-right')}>
        <div className={cx('access-rights')}>
          Công khai
          <img src={iconpublic} alt="" />
        </div>
      </div>
    </div>
  );
};
ItemUpdate.propTypes = {};

export default ItemUpdate;
