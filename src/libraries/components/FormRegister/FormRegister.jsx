import React from 'react';
import PropTypes from 'prop-types';
// router
import { useNavigate } from 'react-router-dom';
import { routePath } from '~/routing/pathRouting';
// component
import { Input } from '~/libraries/form/input/Input';
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
  const handleNavigate = () => {
    navigate(routePath.login);
  };
  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Vui lòng nhập tên'),
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
              <div className={cx('title')}>Create an account</div>
              <div className={cx('form')}>
                <Input
                  type="text"
                  name="name"
                  title="Name"
                  placeholder="Nguyễn Quang Huy"
                  error={errors.name}
                  touched={touched.name}
                  column
                />
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
