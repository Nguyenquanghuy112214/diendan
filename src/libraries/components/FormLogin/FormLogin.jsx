import React from 'react';
import PropTypes from 'prop-types';
// call api
import * as Login from '~/utils/postapi/Login';
// component
import { Input } from '~/libraries/form/input/Input';
import Loading from '../AnimationLoading/Animationloading';
// hook
import useAuth from '~/hooks/redux/auth/useAuth';
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
import { useEffect } from 'react';
const cx = classNames.bind(styles);
function FormLogin(props) {
  const { google } = imgRegister;
  const { auth, setAuth } = useAuth();
  console.log('auth', auth);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(routePath.register);
  };
  const handleForgot = () => {
    navigate(routePath.forgotpassword);
  };

  const handleSubmit = async (values) => {
    const dataLogin = await Login.login(values);
    setAuth(dataLogin.data);
  };
  useEffect(() => {
    if (auth) {
      navigate(routePath.dashboardpage);
    }
  }, [auth]);
  return (
    <Formik
      initialValues={{
        Email: '',
        Password: '',
      }}
      validationSchema={Yup.object({
        Email: Yup.string().required('Vui lòng nhập email'),
        Password: Yup.string()
          .matches(/^[a-zA-Z0-9]+$/, 'Vui lòng không nhập kí tự đặc biệt hoặc khoảng trắng')
          .min(5, 'Vui lòng nhập ít nhất 5 ký tự')
          .max(11, 'Vui lòng không nhập quá 11 ký tự')
          .matches(/(?=(.*[0-9]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{5,}/, 'Nhập ít nhất 1 số, 1 chữ thường, 1 chữ hoa')
          .required('Vui lòng nhập mật khẩu mới'),
      })}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        return (
          <Form>
            <div className={cx('wrapper', 'animationscroll')}>
              <Loading />
              <div className={cx('title')}>Login</div>
              <div className={cx('form')}>
                <Input
                  type="email"
                  name="Email"
                  title="Email Address"
                  placeholder="bkt@gmail.com"
                  error={errors.Email}
                  touched={touched.Email}
                  column
                />
                <Input
                  type="password"
                  name="Password"
                  title="Password"
                  placeholder="*****************"
                  error={errors.Password}
                  touched={touched.Password}
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
