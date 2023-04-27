import React from 'react';
import PropTypes from 'prop-types';

// img
import { imgDetailPage } from '~/assets/img/detailpage';
// components
import Button from '~/libraries/form/button/Button';
// motion
import { motion } from 'framer-motion';
// module css
import classNames from 'classnames/bind';
import styles from './_DetailBook.module.scss';
const cx = classNames.bind(styles);
function DetailBook() {
  const { book, star, img1, img2, img3 } = imgDetailPage;
  const data = [
    {
      id: 1,
      img: img1,
      title: 'Still Standing Tall',
      sub: 'Life begins at the end of your comfort zone.',
    },
    {
      id: 2,
      img: img2,
      title: 'Still Standing Tall',
      sub: 'Life begins at the end of your comfort zone.',
    },
    {
      id: 3,
      img: img3,
      title: 'Still Standing Tall',
      sub: 'Life begins at the end of your comfort zone.',
    },
    {
      id: 4,
      img: img3,
      title: 'Still Standing Tall',
      sub: 'Life begins at the end of your comfort zone.',
    },
  ];
  const start = [1, 1, 1, 1, 1];
  return (
    <div className={cx('wrapper')}>
      {/*  */}
      <div className={cx('wrapper-title')}>
        <div className={cx('title-navigation')}>
          Bài giảng {'>'} TIỂU HỌC {'>'} Bộ Sách Cánh Diều {'>'} Lớp 2 {'>'} Tiếng Anh
        </div>
        <div className={cx('title-post')}>Đưa bài giảng lên</div>
      </div>
      {/*  */}
      <div className={cx('wrapper-detail')}>
        {/*  */}
        <div className={cx('top')}>
          <div className={cx('img')}>
            <img src={book} alt="" />
          </div>
          <div className={cx('infomation-descriptoion')}>
            <div className={cx('infomation')}>
              <div className={cx('name')}>Winning Digital Age</div>
              <div className={cx('wrapper-copy', 'm16')}>
                <div className={cx('item', 'text-color')}>
                  Avilible Copies
                  <span>15</span>
                </div>
                <div className={cx('item', 'text-color')}>
                  Copies In Library
                  <span>15</span>
                </div>
                <div className={cx('item', 'text-color')}>
                  Copies taken-out<span>5</span>
                </div>
              </div>
              <div className={cx('text-color', 'm16')}>
                Author: <span>Quang Huy</span>
              </div>
              <div className={cx('text-color', 'm16')}>
                Language: <span>English</span>
              </div>
              <div className={cx('text-color', 'm16')}>
                Publisher: <span>NXB Kim Dong</span>
              </div>
              <div className={cx('text-color', 'm16')}>
                Published Date: <span>24 June 2023</span>
              </div>
              <div className={cx('text-color', 'm16')}>
                Added to Library: <span>10 July 2023</span>
              </div>
            </div>
            <div className={cx('wrapper-description')}>
              <div className={cx('description')}>
                <span className={cx('span1')}>Description:</span>
                <div className={cx('wrapper2-descriptopn')}>
                  <span className={cx('span2')}>
                    The practical handbook for understanding and winning in the post-COVID digital age and becoming a 21st century leader.
                    For every enterprise and its leaders, the digital age is a roller-coaster ride with more than its fair share of thrills
                    and spills.
                  </span>
                  <div className={cx('wrapper-button')}>
                    <Button primary>Read Now</Button>
                    <Button outline>Dowload</Button>
                  </div>
                  <div className={cx('wrapper-star')}>
                    {start.map((item, index) => {
                      return (
                        <span>
                          <img key={index} src={star} alt="" />
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('wrapper-review')}>
        <div className={cx('wrapper-review-detail')}>
          <div className={cx('title-review', 'm16')}>Reviews</div>
          <div className={cx('infomation-review')}>
            <div className={cx('name-review')}>Quang Huy</div>

            <div className={cx('content-review')}>
              Ấn bản nghệ thuật và văn hóa Ấn Độ 3 Rd..cuốn sách rất hay cho những ai đang chuẩn bị thi công chức.cuốn sách rất hay nên đọc
              một lần..
            </div>
            <div className={cx('date-review')}>Rajesh Dec 2023</div>
          </div>
          {/*  */}
          <div className={cx('infomation-review')}>
            <div className={cx('name-review')}>Xuân Huy</div>
            <div className={cx('content-review')}>
              Ấn bản nghệ thuật và văn hóa Ấn Độ 3 Rd..cuốn sách rất hay cho những ai đang chuẩn bị thi công chức.cuốn sách rất hay nên đọc
              một lần..
            </div>
            <div className={cx('date-review')}>Rajesh Dec 2023</div>
          </div>
        </div>
      </div>
      <div className={cx('wrapper-anotherchoice')}>
        <div className={cx('title-choice')}>Hãy thử nhiều lựa chọn khác</div>
        <div className={cx('wrapper-choice')}>
          {data.map((item, index) => {
            return (
              <div key={index} className={cx('item-choice')}>
                <div className={cx('img')}>
                  <img src={item.img} alt="" />
                </div>
                <div className={cx('content')}>
                  <div className={cx('content-name')}>{item.title}</div>
                  <div className={cx('content-sub')}>{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

DetailBook.propTypes = {};

export default DetailBook;
