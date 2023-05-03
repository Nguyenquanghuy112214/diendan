import { useState } from 'react';
// formik
import { Field } from 'formik';
// css module
import classNames from 'classnames/bind';
import styles from './_Input.module.scss';
const cx = classNames.bind(styles);

export function Input({ error, touched, readonly, title, onBlur, as, onClick, id, type, text, value, placeholder, name, normal }) {
  const [active, setActive] = useState(undefined);
  const handleClick = () => {
    setActive(false);
    onBlur();
  };
  return (
    <div className={cx('wrapper')}>
      <span className={cx('span')}>{title}: </span>
      {!normal && (
        <div
          onClick={() => onClick()}
          onBlur={() => handleClick()}
          onFocus={() => setActive(true)}
          className={cx('wrapper-input', `${active ? 'activeInput' : ''}`, `${error ? 'errorInput' : ''}`)}
        >
          <Field
            readOnly={readonly ? true : false}
            as={as}
            id={id}
            type={type}
            value={value}
            placeholder={error && touched ? error : placeholder}
            name={name}
          />
        </div>
      )}
      {normal && <input className={cx('checkbox')} type={type} />}
    </div>
  );
}
