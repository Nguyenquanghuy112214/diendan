import React from 'react';
import PropTypes from 'prop-types';
// component
import { Input } from '~/libraries/form/input/Input';
// router
import { useNavigate } from 'react-router-dom';
import { routePath } from '~/routing/pathRouting';
// formik
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// Css module
import classNames from 'classnames/bind';
import styles from './_FormForgotPassword.module.scss';
const cx = classNames.bind(styles);
function FormForgotPassword(props) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(routePath.login);
  };
  const handleSubmit = () => {};
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().required('Vui lòng nhập email'),
      })}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        return (
          <Form>
            <div className={cx('wrapper', 'animationscroll')}>
              <div className={cx('title')}>Forgot Password?</div>
              <div className={cx('title-sub')}>
                Enter your email address to get the
                <br />
                password reset link.
              </div>
              <div className={cx('form')}>
                <Input
                  type="email"
                  name="email"
                  title="Email Address"
                  placeholder="bkt@gmail.com"
                  error={errors.email}
                  touched={touched.email}
                  column
                />

                <button className={cx('button')} type="submit">
                  Password Reset
                </button>

                <div onClick={handleNavigate} className={cx('back-login')}>
                  Back to login
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

FormForgotPassword.propTypes = {};

export default FormForgotPassword;
