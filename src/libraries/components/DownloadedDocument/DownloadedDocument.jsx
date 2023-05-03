import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// img
import { imgDownloaded } from '~/assets/img/downloadedpage';
// Css module
import classNames from 'classnames/bind';
import styles from './_DownloadedDocument.module.scss';
import Paginated from '../Paginated/Paginated';
const cx = classNames.bind(styles);
function DownloadedDocument(props) {
  const { star } = imgDownloaded;
  const data = [1, 2, 4, 5, 6, 7, 8, 9];

  // phan trang
  // const itemOffset = useSelector((state) => state.ItemOffset.itemOffset);
  const [check, setCheck] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setCheck(!check);
    const endOffset = itemOffset + 5;

    setCurrentItems(data.slice(itemOffset, endOffset));

    setPageCount(Math.ceil(data.length / 5));
  }, [itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('list-downloaded')}>
        <div className={cx('title')}>Danh sách tài liệu đã tải về</div>
        <div className={cx('list-select')}>
          <div className={cx('item')}>All</div>
          <div className={cx('item')}>Bài Giảng</div>
          <div className={cx('item')}>Giáo án</div>
          <div className={cx('item')}>Đề Thi & Kiểm tra</div>
          <div className={cx('item')}>Tư Liệu</div>
          <div className={cx('item')}>E-learning</div>
          <div className={cx('item')}>Khác</div>
        </div>
        <table>
          <tr className={cx('main-tr')}>
            <th>STT</th>
            <th>Tên tài liệu, tác giả</th>
            <th>Loại tài liệu</th>
            <th>Ngày tải về</th>
            <th>Đánh giá</th>
            <th>Chủ đề</th>
            <th>Thao tác </th>
          </tr>
          {/*  */}
          <Paginated currentItems={currentItems} onClick={(event) => handlePageClick(event)} pageCount={pageCount}>
            {currentItems !== undefined &&
              currentItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className={cx('name')}>Tên bài giảng 1</div>
                    <div className={cx('auth')}>Tác giả</div>
                  </td>
                  <td>Bài giảng</td>
                  <td>10/12/2023</td>
                  <td>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </td>
                  <td>Toán lớp 1</td>
                  <td className={cx('view-more')}>
                    <div>View More</div>
                  </td>
                </tr>
              ))}
          </Paginated>
        </table>
      </div>
    </div>
  );
}

DownloadedDocument.propTypes = {};

export default DownloadedDocument;
