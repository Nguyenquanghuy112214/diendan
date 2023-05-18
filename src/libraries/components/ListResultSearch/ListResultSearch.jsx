import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useNavigate } from 'react-router-dom';

// reacticon
import { AiFillEye } from 'react-icons/ai';
// redux
import useCloseModal from '~/hooks/redux/closemodal/useCloseModal';
// img
import { imgListDataSearch } from '~/assets/img/listdatasearch';
// hook
import useSelectLesson from '~/hooks/redux/selectIdForGetLesson/useSelectLesson';
import useTitle from '~/hooks/redux/tiltle/useSelectMenuLv2';
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
import useSelectMenu from '~/hooks/redux/selectmenu/useSelectMenu';
import useArrayMenu from '~/hooks/redux/arraymenu/useArrayMenu';
const cx = classNames.bind(styles);

function ListResultSearch() {
  const { idLectureCategory, idController } = useSelectLesson();
  const { arraymenu } = useArrayMenu();
  const [data, setData] = useState([]);
  console.log('idController', idController);
  console.log('idLectureCategory', idLectureCategory);
  const fetch = async () => {
    const dataLesson = await FetchLessonByPre.fetchLessonByPre(idController);
    if (dataLesson !== undefined) {
      setData(dataLesson.data);
    } else {
      setData([]);
    }
  };
  const fetch2 = async () => {
    const dataLesson = await FetchLessonByIdLecture.FetchLessonByIdLecture(idController, idLectureCategory);
    setData(dataLesson.data);
  };

  const fetch3 = async () => {
    const length = arraymenu.length;
    var i = 0;
    const dataLv0 = [];
    for (i = 0; i < length; i++) {
      const dataItemLv0 = await FetchLessonNoCategory.FetchLessonNoCategory(arraymenu[i].idController);
      console.log('dataItemLv0', dataItemLv0);
      dataLv0.push({
        lectureCategory: `Thư viện ${arraymenu[i]?.title} `,
        idController: arraymenu[i]?.idController,
        lectureItems: [...dataItemLv0.data],
      });
    }
    console.log('dataLv0', dataLv0);
    setData(dataLv0);
  };

  useEffect(() => {
    if (idLectureCategory === false && idController !== false) {
      console.log('th1');
      fetch();
    } else if (idLectureCategory !== false) {
      console.log('th2');

      fetch2();
    } else if (idLectureCategory === false && idController === false) {
      console.log('th3');

      fetch3();
    }
  }, [idController, idLectureCategory, arraymenu]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper2')}>
        <div className={cx('title')}>Thư viện Tài Liệu</div>
        <div className={cx('list')}>
          {data !== undefined && data.length > 0 ? (
            data?.map((item, index) => <ListRusult item={item} key={index} />)
          ) : (
            <div className={cx('error')}></div>
          )}
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
        <div className={cx('title-listime')}>
          {item?.lectureCategory || item?.examsAndTestsCategory || item?.lessonPlanCategory || item?.eLearningCategory}
        </div>
        <div className={cx('wrapper-nivigate')}>
          <span>Xem tất cả</span> | <span onClick={postDocument}>Đưa bài giảng lên</span>
        </div>
      </motion.div>
      <motion.div variants={opacity(0.2, 1)} className={cx('wrapper-list')}>
        {item?.lectureItems?.map((item2, index) => (
          <ItemResule key={index} item={item2} itemParent={item} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const ItemResule = ({ item, itemParent }) => {
  const { bgitem } = imgListDataSearch;
  const navigate = useNavigate();
  const { title, idForum } = useSelectMenu();
  const { titlelv0, titlelv1, titlelv2 } = useTitle();
  const handleClick = () => {
    navigate(`/detaildocument/${idForum || itemParent?.idController}/${title}/${titlelv0}/${titlelv1}/${titlelv2}/${item?.itemId}`);
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
