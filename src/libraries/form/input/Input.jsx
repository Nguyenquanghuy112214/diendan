import { useState } from 'react';
// formik
import { Field, useField } from 'formik';
// css module
import classNames from 'classnames/bind';
import styles from './_Input.module.scss';
const cx = classNames.bind(styles);

export function Input({ forgot, error, touched, title, handleNavigate, onBlur, onClick, type, column, value, placeholder, name, normal }) {
  const handleClick = () => {
    onBlur();
  };
  return (
    <div className={cx('wrapper', column ? 'column' : '')}>
      <div className={cx('wrapper-label')}>
        {error && touched && column ? (
          <span className={cx('span', 'span-error')}>{error}</span>
        ) : (
          <span className={cx('span')}>{title}</span>
        )}

        {forgot && (
          <span onClick={() => handleNavigate()} className={cx('forgot')}>
            Forgot Password?
          </span>
        )}
      </div>
      {!normal && (
        <div
          onClick={() => onClick()}
          onBlur={() => handleClick()}
          className={cx('wrapper-input', `${error && touched ? 'errorInput' : ''}`)}
        >
          <Field type={type} value={value} placeholder={error && touched && !column ? error : placeholder} name={name} />
        </div>
      )}

      {normal && <input className={cx('checkbox')} type={type} />}
    </div>
  );
}
