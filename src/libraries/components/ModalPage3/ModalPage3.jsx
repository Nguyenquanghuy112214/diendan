import React from 'react';
import PropTypes from 'prop-types';
// component
import { Input } from '~/libraries/form/input/Input';
// img
import { imgModal } from '~/assets/img/modal';
// formik
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Css module
import classNames from 'classnames/bind';
import styles from './_ModalPage3.module.scss';
const cx = classNames.bind(styles);
function ModalPage3() {
  const { upload } = imgModal;
  const handleSubmit = () => {};
  return (
    <Formik
      initialValues={{
        title: '',
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('Vui lòng nhập tiêu đề'),
      })}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        return (
          <Form>
            <div className={cx('wrapper', 'wrapper-modalpage', 'animationscroll', 'p40')}>
              <div className={cx('title')}>
                Thư mục nhập liệu{' '}
                <span>
                  : Gốc {'>'} TIỂU HỌC {'>'} Bộ Sách Cánh Diều {'>'} Lớp 2 {'>'} Toán
                </span>
              </div>
              <div className={cx('form')}>
                <Input
                  name="title"
                  title="Tiêu đề"
                  placeholder="Nhập tiêu đề bài giảng muốn đưa lên diễn đàn"
                  error={errors.title}
                  touched={touched.title}
                />
                <Input title="Nguồn" placeholder="Nhập nguồn bài giảng ( Nếu tự làm thì không cần nhập )" />
                <Input normal title="Công khai" type="checkbox" />
              </div>
              <label className={cx('chose-file')} htmlFor="input">
                <img src={upload} alt="" />
                <div className={cx('browse-file')}>
                  <button>Browse file</button>
                </div>
                <div className={cx('suport')}>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</div>
              </label>
              <input style={{ display: 'none' }} id="input" type="file"></input>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

ModalPage3.propTypes = {
  active: PropTypes.bool,
};

export default ModalPage3;
