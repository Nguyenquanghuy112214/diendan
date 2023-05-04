import React from 'react';
import PropTypes from 'prop-types';
// animation
import { motion } from 'framer-motion';
import { opacity, staggerContainer } from '~/constants/motion';
//
import { Helmet } from 'react-helmet';
// hook
import useDocument from '~/hooks/redux/document/useDocument';
// components
import FormRegister from '~/libraries/components/FormLogin/FormLogin';
// Css module
import classNames from 'classnames/bind';
import styles from './_LoginPage.module.scss';
const cx = classNames.bind(styles);
function LoginPage(props) {
  const { document } = useDocument();

  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className={cx('wrapper')}>
      <Helmet>
        <title>{document.title}</title>
      </Helmet>
      <div className={cx('wrapper-form')}>
        <motion.div variants={opacity(0.4, 2)}>
          <FormRegister />
        </motion.div>
      </div>
    </motion.div>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
