import React from 'react';
import PropTypes from 'prop-types';
// component
import { Input } from '~/libraries/form/input/Input';
// img
import { imgRegister } from '~/assets/img/register';
// router
import { useNavigate } from 'react-router-dom';
import { routePath } from '~/routing/pathRouting';
// formik
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// Css module
import classNames from 'classnames/bind';
import styles from './_FormLogin.module.scss';
const cx = classNames.bind(styles);
function FormLogin(props) {
  const { google } = imgRegister;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(routePath.register);
  };
  const handleForgot = () => {
    navigate(routePath.forgotpassword);
  };

  const handleSubmit = () => {};
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().required('Vui lòng nhập email'),
        password: Yup.string().required('Vui lòng nhập password'),
      })}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        return (
          <Form>
            <div className={cx('wrapper', 'animationscroll')}>
              <div className={cx('title')}>Login</div>
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
                <Input
                  type="password"
                  name="password"
                  title="Password"
                  placeholder="*****************"
                  error={errors.password}
                  touched={touched.password}
                  column
                  forgot
                  handleNavigate={handleForgot}
                />
                <div className={cx('save')}>
                  <label className={cx('container')}>
                    <Field name="SavePassword" type="checkbox" className={cx('checkbox2')} />
                    <span style={{ color: '#5D5A6F', lineHeight: '30px' }}>Keep me siggned in</span>
                    <span className={cx('checkmark', 'checkmark-res')}></span>
                  </label>
                </div>
                <button className={cx('button')} type="submit">
                  Login
                </button>
                <div className={cx('wrapper-loginwith')}>
                  <span className={cx('chonse-more')}>or sign in with</span>
                  <hr />
                </div>
                <div className={cx('login-google')}>
                  <img src={google} alt="" />
                  <span className={cx('continue')}>Continue with Google</span>
                </div>

                <div onClick={handleNavigate} className={cx('create')}>
                  Create an account
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

FormLogin.propTypes = {};

export default FormLogin;
