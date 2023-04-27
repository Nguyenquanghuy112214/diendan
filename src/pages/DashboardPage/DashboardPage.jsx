import { useEffect } from 'react';
import PropTypes from 'prop-types';
//router dom
import { useLocation } from 'react-router-dom';
//
import useDocument from '~/hooks/redux/document/useDocument';
//
import { Helmet } from 'react-helmet';
// components
import Header from '~/libraries/layouts/Header/Header';
import ListCart from '~/libraries/components/ListCart/ListCart';
import ListDataSearch from '~/libraries/components/ListDataSearch/ListDataSearch';
import ListResultSearch from '~/libraries/components/ListResultSearch/ListResultSearch';
import NewsContent from '~/libraries/components/NewsContent/NewsContent';
import ProfileCompany from '~/libraries/components/ProfileCompany/ProfileCompany';
import ProductIntroduct from '~/libraries/components/ProductIntroduct/ProductIntroduct';
import Modal from '~/libraries/components/Modal/Modal';
// Css module
import classNames from 'classnames/bind';
import styles from './_DashboardPage.module.scss';
const cx = classNames.bind(styles);

function DashboardPage() {
  const { document } = useDocument();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);
  return (
    <div>
      <Helmet>
        <title>{document.title}</title>
      </Helmet>
      <div className={cx('wrapper')}>
        <Modal>hello</Modal>
        <Header />
        <ListCart />
        <ListDataSearch />
        <ListResultSearch />
        <NewsContent />
        <ProfileCompany />
        <ProductIntroduct />
      </div>
    </div>
  );
}

export default DashboardPage;

DashboardPage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
