import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useNavigate } from 'react-router-dom';
import { routePath } from '~/routing/pathRouting';

// reacticon
import { AiFillEye } from 'react-icons/ai';
// redux
import useCloseModal from '~/hooks/redux/closemodal/useCloseModal';
// img
import { imgListDataSearch } from '~/assets/img/listdatasearch';
// hook
import useSelectLesson from '~/hooks/redux/selectIdForGetLesson/useSelectLesson';
// thu vien animation
import { motion } from 'framer-motion';
// animation
import { staggerContainer, opacity } from '~/constants/motion';
// call api
import * as FetchLessonByPre from '~/utils/fetchapi/FetchLessonByPre';
import * as FetchLessonByIdLecture from '~/utils/fetchapi/FetchLessonByIdLecture';
import * as FetchLessonNoCategory from '~/utils/fetchapi/FetchLessonNoCategory';
// date
import 'moment/locale/vi';
import moment from 'moment';
// Css module
import classNames from 'classnames/bind';
import styles from './_ListResultSearch.module.scss';
import Loading from '../AnimationLoading/Animationloading';
const cx = classNames.bind(styles);

function ListResultSearch() {
  const { idLectureCategory, idContainer } = useSelectLesson();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetch = async () => {
    const dataLesson = await FetchLessonByPre.fetchLessonByPre(idContainer);
    setData(dataLesson.data);
  };
  const fetch2 = async () => {
    const dataLesson = await FetchLessonByIdLecture.FetchLessonByIdLecture(idLectureCategory);
    setData(dataLesson.data);
  };

  const fetch3 = async () => {
    const test = [];
    const [data1, data2, data3] = await Promise.all([
      FetchLessonNoCategory.FetchLessonNoCategory('ForumLectureItem'),
      FetchLessonNoCategory.FetchLessonNoCategory('ForumLessonPlanItem'),
      FetchLessonNoCategory.FetchLessonNoCategory('ForumExamsAndTestsItem'),
    ]);
    test.push(data1.data, data2.data, data3.data);
    setData(test);
  };

  useEffect(() => {
    if (idLectureCategory === false && idContainer !== false) {
      fetch();
    } else if (idLectureCategory !== false) {
      fetch2();
    } else if ((idLectureCategory === false, idContainer === false)) {
      fetch3();
    }
  }, [idContainer, idLectureCategory]);

  return (
    <div className={cx('wrapper')}>
      <Loading active={loading === true} />
      <div className={cx('wrapper2')}>
        <div className={cx('title')}>Thư viện Tài Liệu</div>
        <div className={cx('list')}>
          {data?.map((item, index) => (
            <ListRusult item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

ListResultSearch.propTypes = {};

const ListRusult = ({ item }) => {
  const { setActiveModal } = useCloseModal();
  const postDocument = () => {
    setActiveModal(true);
  };
  if (!item) return null;
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={cx('wrapper-listresult')}
    >
      <motion.div variants={opacity(0.1, 1)} className={cx('wrapper-title')}>
        <div className={cx('title-listime')}>{item?.lectureCategory || item?.examsAndTestsCategory || item?.lessonPlanCategory}</div>
        <div className={cx('wrapper-nivigate')}>
          <span>Xem tất cả</span> | <span onClick={postDocument}>Đưa bài giảng lên</span>
        </div>
      </motion.div>
      <motion.div variants={opacity(0.2, 1)} className={cx('wrapper-list')}>
        {item?.lectureItems?.map((item, index) => (
          <ItemResule key={index} item={item} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const ItemResule = ({ item }) => {
  moment.locale('vi');
  const { bgitem } = imgListDataSearch;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(routePath.detaildocument);
  };
  return (
    <div className={cx('wrapper-item')}>
      <div onClick={handleClick} className={cx('img')}>
        <img src={bgitem} alt="" />
      </div>
      <div className={cx('view')}>
        {item?.numberOfViews}
        <AiFillEye />
      </div>
      <div className={cx('body')}>
        <div onClick={handleClick} className={cx('title-item')}>
          {item?.title}
        </div>
        <div className={cx('described')}>{item?.description}</div>
        <div className={cx('auth-time')}>
          <span>Quang Huy</span>
          <span>{moment(item?.createdOnDate).format('Do-MM-YYYY')}</span>
        </div>
      </div>
    </div>
  );
};

export default ListResultSearch;
