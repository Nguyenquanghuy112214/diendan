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
import FormForgotPassword from '~/libraries/components/FormForgotPassword';
// Css module
import classNames from 'classnames/bind';
import styles from './_ForgotPasswordPage.module.scss';
const cx = classNames.bind(styles);
function ForgotPasswordPage(props) {
  const { document } = useDocument();

  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className={cx('wrapper')}>
      <Helmet>
        <title>{document.title}</title>
      </Helmet>
      <div className={cx('wrapper-form')}>
        <motion.div variants={opacity(0.4, 2)}>
          <FormForgotPassword />
        </motion.div>
      </div>
    </motion.div>
  );
}

ForgotPasswordPage.propTypes = {};

export default ForgotPasswordPage;
