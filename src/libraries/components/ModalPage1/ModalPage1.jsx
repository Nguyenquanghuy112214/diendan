import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Css module
import classNames from 'classnames/bind';
import styles from './_ModalPage1.module.scss';
const cx = classNames.bind(styles);
function ModalPage1() {
  const data = [
    {
      button: 'BÀI GIẢNG TRÌNH CHIẾU',
      sub: <Sub1 />,
    },
    {
      button: 'GIÁO ÁN , GIÁO TRÌNH',
      sub: <Sub2 />,
    },

    {
      button: 'ĐỀ THI , ĐÁP ÁN ,...',
      sub: <Sub3 />,
    },
    {
      button: 'TƯ LIỆU ẢNH , PHIM ,...',
      sub: <Sub4 />,
    },
    {
      button: 'BÀI GIẢNG E-LEARNING',
      sub: <Sub5 />,
    },
    {
      button: 'BÀI THI TRÊN MẠNG ,...',
      sub: 'Tạo đề thi, đề kiểm tra,... cho phép làm bài trực tuyến trên mạng và chấm điểm ngay. Các câu hỏi có thể tự nhập theo lô hoặc chọn ngẫu nhiên từ ngân hàng câu hỏi',
    },
  ];

  return (
    <div className={cx('wrapper', 'wrapper-modalpage', 'animationscroll', 'p40')}>
      {data.map((item, index) => (
        <div key={index} className={cx('list-item')}>
          <div className={cx('button')}>{item.button}</div>
          <div className={cx('sub')}>{item.sub}</div>
        </div>
      ))}
    </div>
  );
}

const Sub1 = () => {
  return (
    <div>
      Các file <strong> PPT, PPTX, GSP, CG3,</strong> thư mục đóng gói Violet được thiết kế bằng các phần mềm{' '}
      <strong> PowerPoint, Violet, Sketchpad, Cabri3D,...</strong>
    </div>
  );
};
const Sub2 = () => {
  return (
    <div>
      Các file <strong>DOC, DOCX, RTF, PDF</strong> được soạn thảo bằng các phần mềm như <strong> Microsoft Word, Open Office,...</strong>{' '}
      chứa giáo án, giáo trình
    </div>
  );
};
const Sub3 = () => {
  return (
    <div>
      Các file <strong>DOC, DOCX, RTF, PDF</strong> được soạn thảo bằng các phần mềm như <strong>Microsoft Word, Open Office,...</strong>{' '}
      chứa đề thi, đề kiểm tra, đáp án
    </div>
  );
};
const Sub4 = () => {
  return (
    <div>
      Các file ảnh <strong> JPG, GIF, PNG, BMP, file</strong> đa phương tiện{' '}
      <strong> AVI, MPEG, WMV, MOV, 3GP, FLV, MP4, MP3, SWF,...</strong> thông dụng trên Internet và các thiết bị nghe nhìn.
    </div>
  );
};
const Sub5 = () => {
  return (
    <div>
      Các thư mục đóng gói chuẩn <strong>SCORM</strong>, được xuất bản từ các phần mềm như{' '}
      <strong>Adobe Presenter, Violet, Articulate, iSpring, Camtasia Studio,...</strong>
    </div>
  );
};

ModalPage1.propTypes = {};

export default ModalPage1;
