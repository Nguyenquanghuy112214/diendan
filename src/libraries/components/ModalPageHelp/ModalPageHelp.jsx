import React from 'react';
import PropTypes from 'prop-types';

// Css module
import classNames from 'classnames/bind';
import styles from './_ModalPageHelp.module.scss';
const cx = classNames.bind(styles);
function ModalPageHelp(props) {
  const data = [
    {
      id: 1,
      title: 'Các thầy cô đọc kỹ những chú ý sau để gửi bài giảng thành công:',
      children: [
        {
          id: 2,
          title: '* Nhấn nút Browse để chọn file bài giảng đưa lên, bài giảng có thể là Powerpoint, Violet, SketchPad, Cabri3D,...',
          children: [
            {
              id: 3,
              title:
                '* Bài giảng Powerpoint không được đặt mật khẩu. Nếu bài giảng có phim hoặc giáo án đi kèm thì phải nén tất cả lại thành 1 file nén',
            },
            { id: 4, title: '* Bài giảng Violet: Đóng gói dưới dạng HTML hoặc EXE, sau đó nén cả thư mục chứa bài giảng thành 1 file nén' },
            { id: 5, title: '* Các bài giảng khác: Đưa file bài giảng hoặc file nén các file của bài giảng' },
            {
              id: 6,
              title:
                '* Kể cả khi bài giảng chỉ có một file, các thầy cô vẫn nên nén lại rồi mới gửi lên. Để nén file trên WindowsXP, click phải chuột vào thư mục hoặc file, chọn Send To, chọn tiếp Compressed (zipped) Folder',
            },
          ],
        },
        {
          id: 7,
          title:
            '* Sau khi gửi, trang Web sẽ thông báo việc đưa lên thành công. Thầy cô đợi khoảng 5 phút để bài giảng của mình được cập nhật.',
        },
      ],
    },
  ];
  return (
    <div className={cx('wrapper', 'p40')}>
      <div className={cx('title-main')}>Hướng dẫn Tải dữ liệu lên diễn đàn</div>
      <ul className={cx('menu')}>
        {data.map((item, index) => (
          <HelpItem key={index} item={item} />
        ))}
        <div className={cx('title')}>
          Thầy cô có thể xem phim <strong>hướng dẫn đưa tài liệu lên tại đây</strong>
        </div>
      </ul>
    </div>
  );
}

const HelpItem = ({ item }) => {
  if (item.children) {
    return (
      <li className={cx('menu-item')}>
        <div className={cx('title')}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
        <ul>
          {item.children.map((child, indexchild) => (
            <HelpItem key={indexchild} item={child} />
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li className={cx('menu-item')}>
        <div className={cx('title')}>
          {item.img && <img src={item.img} alt="" />}
          {item.title}
        </div>
      </li>
    );
  }
};
ModalPageHelp.propTypes = {};

export default ModalPageHelp;
