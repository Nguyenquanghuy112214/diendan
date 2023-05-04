import React from 'react';
import PropTypes from 'prop-types';
//
import { Helmet } from 'react-helmet';
// animation
import { motion } from 'framer-motion';
import { opacity, staggerContainer } from '~/constants/motion';
// hook
import useDocument from '~/hooks/redux/document/useDocument';
// components
import FormRegister from '~/libraries/components/FormRegister';
// Css module
import classNames from 'classnames/bind';
import styles from './_RegisterPage.module.scss';
const cx = classNames.bind(styles);
function RegisterPage(props) {
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

RegisterPage.propTypes = {};

export default RegisterPage;
