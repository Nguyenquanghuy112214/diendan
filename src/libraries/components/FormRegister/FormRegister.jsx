import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// router
import { useNavigate } from 'react-router-dom';
import { routePath } from '~/routing/pathRouting';
// call api
import * as Register from '~/utils/postapi/Register';
// component
import { Input } from '~/libraries/form/input/Input';
import ToastNotify from '../ToastNotify/ToastNotify';
// img
import { imgRegister } from '~/assets/img/register';
// formik
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// Css module
import classNames from 'classnames/bind';
import styles from './_FormRegister.module.scss';

const cx = classNames.bind(styles);
function FormRegister(props) {
  const { google } = imgRegister;
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const handleNavigate = () => {
    navigate(routePath.login);
  };
  const handleSubmit = async (values) => {
    const dataRegister = await Register.register(values);
    setData(dataRegister);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(null);
    }, [4000]);
    return () => clearTimeout(timer);
  }, [data]);

  const closeToast = () => {
    setData(null);
  };

  return (
    <Formik
      initialValues={{
        UserName: '',
        Email: '',
        Password: '',
        ComfirmPass: '',
      }}
      validationSchema={Yup.object({
        UserName: Yup.string()
          .matches(/^[a-zA-Z0-9]+$/, 'Vui lòng không nhập kí tự đặc biệt hoặc khoảng trắng')
          .min(5, 'Vui lòng nhập ít nhất 5 ký tự')
          .max(14, 'Vui lòng không nhập quá 14 ký tự')
          .required('Vui lòng nhập tên đăng nhập'),
        Email: Yup.string().required('Vui lòng nhập email'),
        Password: Yup.string()
          .matches(/^[a-zA-Z0-9]+$/, 'Vui lòng không nhập kí tự đặc biệt hoặc khoảng trắng')
          .min(5, 'Vui lòng nhập ít nhất 5 ký tự')
          .max(11, 'Vui lòng không nhập quá 11 ký tự')
          .matches(/(?=(.*[0-9]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{5,}/, 'Nhập ít nhất 1 số, 1 chữ thường, 1 chữ hoa')
          .required('Vui lòng nhập mật khẩu'),
        ComfirmPass: Yup.string()
          .required('Vui lòng xác nhận mật khẩu')
          .oneOf([Yup.ref('Password'), null], 'Mật khẩu không trùng khớp'),
      })}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        return (
          <Form>
            <div className={cx('wrapper', 'animationscroll')}>
              <ToastNotify
                onClick={closeToast}
                active={data !== null && data.success !== null && data.success === false}
                existname
                title="Lỗi đăng ký !"
                subtitle={data !== null && data.message !== null && data.message}
              />
              <ToastNotify
                onClick={closeToast}
                active={data !== null && data.success !== null && data.success === true}
                title="Tạo tài khoản thành công !"
                subtitle={data !== null && data.message !== null && data.message}
                success
              />

              <div className={cx('title')}>Create an account</div>
              <div className={cx('form')}>
                <Input
                  sm
                  type="text"
                  name="UserName"
                  title="Name"
                  placeholder="nguyenquanghuy2000"
                  error={errors.UserName}
                  touched={touched.UserName}
                  column
                />
                <Input
                  sm
                  type="email"
                  name="Email"
                  title="Email Address"
                  placeholder="bkt@gmail.com"
                  error={errors.Email}
                  touched={touched.Email}
                  column
                />
                <Input
                  sm
                  type="password"
                  name="Password"
                  title="Password"
                  placeholder="*****************"
                  error={errors.Password}
                  touched={touched.Password}
                  column
                />
                <Input
                  sm
                  type="password"
                  name="ComfirmPass"
                  title="Comfirm Password"
                  placeholder="*****************"
                  error={errors.ComfirmPass}
                  touched={touched.ComfirmPass}
                  column
                />
                <div className={cx('temp-of-service')}>
                  By continuing, you agree to our <strong>terms of service.</strong>
                </div>
                <button className={cx('button')} type="submit">
                  Sing Up
                </button>
                <div className={cx('wrapper-loginwith')}>
                  <span className={cx('chonse-more')}>or sign in with</span>
                  <hr />
                </div>
                <div className={cx('login-google')}>
                  <img src={google} alt="" />
                  <span className={cx('continue')}>Continue with Google</span>
                </div>

                <div className={cx('already')}>
                  Already have an account? <strong onClick={handleNavigate}>Sign in here</strong>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

FormRegister.propTypes = {};

export default FormRegister;
