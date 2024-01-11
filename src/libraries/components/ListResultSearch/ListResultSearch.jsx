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
  // console.log("arraymenu", arraymenu);
  // console.log("idController", idController);
  // console.log("idLectureCategory", idLectureCategory);
  const [data, setData] = useState([]);
  console.log("data", data);
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
      dataLv0.push({
        lectureCategory: `Thư viện ${arraymenu[i]?.title} `,
        idController: arraymenu[i]?.idController,
        lectureItems: [...dataItemLv0.data],
      });
    }
    setData(dataLv0);
  };

  useEffect(() => {
    if (idLectureCategory === false && idController !== false) {

      fetch();
    } else if (idLectureCategory !== false) {

      fetch2();
    } else if (idLectureCategory === false && idController === false) {

      fetch3();
    }
  }, [idController, idLectureCategory, arraymenu]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper2')}>
        <div className={cx('title')}>Thư viện Tài Liệu</div>
        <div className={cx('list')}>
          {data !== undefined && data.length > 0 ? (
            data?.map((item, index) => {
              return (<ListRusult item={item} key={index} />)
            })
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
          <a style={{ color: '#2f5ed6' }} href='http://adminforum.bksgroup.vn/' target='_blank'>Đưa bài giảng lên</a>
        </div>
      </motion.div>
      <motion.div variants={opacity(0.2, 1)} className={cx('wrapper-list')}>
        {(item?.lectureItems || item?.examsAndTestsItems || item?.lessonPlanItems || item?.eLearningItems)?.map((item2, index) => {
          if (index < 10) {
            return <ItemResule key={index} item={item2} itemParent={item} />
          }
        })}
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
        <img src={`https://diendan.bkt.net.vn/Resourcelib/${item?.fileThumbnail}` || bgitem} alt="" />
      </div>
      <div className={cx('view')}>
        {item?.numberOfViews || 0}
        <AiFillEye />
      </div>
      <div className={cx('body')}>
        <div onClick={handleClick} className={cx('title-item')}>
          {item?.title}
        </div>
        <div className={cx('described')}>{item?.description || "Chưa có thông tin"}</div>
        <div className={cx('auth-time')}>
          <span>{item?.createdByUserName || "Chưa có thông tin"}</span>
          <span>{item?.createdOnDate ? moment(item?.createdOnDate).format('Do-MM-YYYY') : " "}</span>
        </div>
      </div>
    </div>
  );
};

export default ListResultSearch;
