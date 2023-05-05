import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
// call api
import * as fetchProfile from '~/utils/fetchapi/FetchProfile';
//
import { Helmet } from 'react-helmet';
//
import useDocument from '~/hooks/redux/document/useDocument';
// component
import Header from '~/libraries/layouts/Header/Header';
import Account from '~/libraries/components/Account/Account';
import Security from '~/libraries/components/Security/Security';
// Css module
import classNames from 'classnames/bind';
import styles from './_ProfilePage.module.scss';
const cx = classNames.bind(styles);

function ProfilePage(props) {
  const { document } = useDocument();
  const [active, setActive] = useState(0);
  const [data, setData] = useState();
  const Item = [{ title: 'Account' }, { title: 'Security' }];
  const handleClick = (index) => {
    setActive(index);
  };
  useEffect(() => {
    const fetch = async () => {
      const dataProfile = await fetchProfile.fetchProfile();
      setData(dataProfile.data);
      console.log('dataProfile', dataProfile);
    };
    fetch();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{document.title}</title>
      </Helmet>
      <div className={cx('wrapper')}>
        <Header />
        <div className={cx('content')}>
          <div className={cx('wrapper-navigate')}>
            {Item.map((item, index) => {
              return (
                <div key={index} onClick={() => handleClick(index)} className={cx('item', `${active === index ? 'active' : ''}`)}>
                  {item.title}
                </div>
              );
            })}
          </div>
          {+active === 0 && <Account data={data} />}
          {+active === 1 && <Security />}
        </div>
      </div>
    </div>
  );
}

ProfilePage.propTypes = {};

export default ProfilePage;
