
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

// call api
import * as FetchDetaiDocument from '~/utils/fetchapi/FetchDetaiDocument';
// router
import { useParams } from 'react-router-dom';
// img
import { imgDetailPage } from '~/assets/img/detailpage';
// components
import Button from '~/libraries/form/button/Button';
import VideoScrom from '../VideoScrom/VideoScrom';
import fileDoc from './test.docx'
import ModalNoLogin from '../ModalNoLogin/ModalNoLogin';

// module css
import classNames from 'classnames/bind';
import styles from './_DetailBook.module.scss';
import useAuth from '~/hooks/redux/auth/useAuth';
import PageFlip from '../Pageflip/PageFlip';
import { formatDay } from '~/constants/formatDay';
import { FetchLessonByIdLecture } from '~/utils/fetchapi/FetchLessonByIdLecture';
import { useNavigate } from 'react-router-dom';
import ViewDoc from '../ViewDoc/ViewDoc';
import Video from '../Video/Video';
import H5p from '../H5p';
import DownloadWordFile from '../DownloadFile/DownloadFile';
import { UpdateView } from '~/utils/fetchapi/UpdateView';
import { UpdateDownload } from '~/utils/fetchapi/UpdateDownload';
const cx = classNames.bind(styles);
function DetailBook() {
  const navigation = useNavigate()
  const { auth } = useAuth();
  const { title, namelv0, namelv1, namelv2, iditem, idforum } = useParams();
  const { book, img1, } = imgDetailPage;
  const [dataDetail, setDataDetail] = useState()
  const [dataRelate, setDataRelate] = useState([])
  const [active, setActive] = useState(false);
  const [activeHelp, setActiveHelp] = useState(false);


  useEffect(() => {
    const fetch = async () => {
      const dataDetail = await FetchDetaiDocument.FetchDetaiDocument(idforum, iditem);

      const res = await FetchLessonByIdLecture(idforum, dataDetail?.data?.lessonPlanCategoryId || dataDetail?.data?.lectureCategoryId || dataDetail?.data?.examsAndTestsCategorId || dataDetail?.data?.eLearningCategoryId)
      setDataDetail(dataDetail?.data)
      setDataRelate(res?.data[0]?.lectureItems || res?.data[0]?.examsAndTestsItems || res?.data[0]?.lessonPlanItems || res?.data[0]?.eLearningItems)
    };
    fetch();
  }, [idforum, iditem]);

  const handleClick = useCallback(async () => {
    try {
      const res = await UpdateView(idforum, iditem);
      console.log('view', res);
      if (auth?.token) {
        setActive(!active);
      } else {
        setActiveHelp(!activeHelp);
      }
    } catch (error) {
      console.error('Error:', error);
      // Xử lý lỗi ở đây nếu cần thiết
    }
  }, [UpdateView, idforum, iditem, auth?.token, active, activeHelp]);
  const handleDownload = async () => {
    const download = await UpdateDownload(idforum, iditem)
    console.log("download", download);

  };
  const handleNavigation = (item) => {
    navigation(`/detaildocument/${idforum}/${title}/${namelv0}/${namelv1}/${namelv2}/${item?.itemId}`)
  };
  console.log("dataDetail", dataDetail);
  return (
    <div className={cx('wrapper')}>
      <ModalNoLogin activeHelp={activeHelp} onClick={handleClick} />
      {dataDetail?.formatName === 'scorm' && <VideoScrom onClick={handleClick} active={active} data={dataDetail} />}
      {dataDetail?.formatName === 'pdf' && <PageFlip active={active} onClick={handleClick} data={dataDetail} />}
      {dataDetail?.formatName === 'docx' && <ViewDoc active={active} onClick={handleClick} data={dataDetail} />}
      {dataDetail?.formatName === 'video' && <Video active={active} onClick={handleClick} data={dataDetail} />}
      {dataDetail?.formatName === 'h5p' && active && <H5p active={active} onClick={handleClick} data={dataDetail} />}



      {/*  */}
      <div className={cx('wrapper-title')}>
        <div className={cx('title-navigation')}>
          {title === 'null' ? '' : title} {namelv0 === 'null' ? '' : '>'} {namelv0 === 'null' ? '' : namelv0}{' '}
          {namelv1 === 'null' ? '' : '>'} {namelv1 === 'null' ? '' : namelv1} {namelv2 === 'null' ? '' : '>'}{' '}
          {namelv2 === 'null' ? '' : namelv2}
        </div>
        <a style={{ color: '#2f5ed6' }} href='http://adminforum.bksgroup.vn/' target='_blank'>Đưa bài giảng lên</a>
      </div>
      {/*  */}
      <div className={cx('wrapper-detail')}>
        {/*  */}
        <div className={cx('top')}>
          <div className={cx('img')}>
            <img src={`https://diendan.bkt.net.vn/Resourcelib/${dataDetail?.fileThumbnail}` || book} alt="" />
          </div>
          <div className={cx('infomation-descriptoion')}>
            <div className={cx('infomation')}>
              <div className={cx('name')}>{dataDetail?.title}</div>
              <div className={cx('wrapper-copy', 'm16')}>
                <div className={cx('item', 'text-color')}>
                  Lượt tải về
                  <span>{dataDetail?.numberOfDowns || 0}</span>
                </div>
                <div className={cx('item', 'text-color')}>
                  Lượt xem
                  <span>{dataDetail?.numberOfViews || 0}</span>
                </div>

              </div>
              <div className={cx('text-color', 'm16')}>
                Danh mục: <span>{dataDetail?.lectureCategoryName || "Chưa có thông tin"}</span>
              </div>
              <div className={cx('text-color', 'm16')}>
                Tác giả: <span>{dataDetail?.createdByUserName || "Chưa có thông tin"}</span>
              </div>
              <div className={cx('text-color', 'm16')}>
                Ngày tạo: <span>{dataDetail?.createdOnDate ? formatDay(dataDetail?.createdOnDate) : "Chưa có thông tin"}</span>
              </div>
              <div className={cx('text-color', 'm16')}>
                Ngày public: <span>{dataDetail?.lastModifiedOnDate ? formatDay(dataDetail?.lastModifiedOnDate) : "Chưa có thông tin"}</span>
              </div>
            </div>
            <div className={cx('wrapper-description')}>
              <div className={cx('description')}>
                <span className={cx('span1')}>Description:</span>
                <div className={cx('wrapper2-descriptopn')}>
                  <span className={cx('span2')}>
                    {dataDetail?.description || "Chưa có thông tin"}
                  </span>
                  <div className={cx('wrapper-button')}>
                    <Button primary onClick={handleClick}>Read Now</Button>
                    {/* {dataDetail?.} */}
                    {dataDetail?.formatName !== 'h5p' && dataDetail?.formatName !== 'audio' && dataDetail?.formatName !== 'video' && <DownloadWordFile handleDownload={handleDownload} file={`https://diendan.bkt.net.vn/Resourcelib/${dataDetail?.fileLecture || dataDetail?.fileLessonPlan}`} />}
                  </div>
                  {/* <div className={cx('wrapper-star')}>
                    {start.map((item, index) => {
                      return (
                        <span>
                          <img key={index} src={star} alt="" />
                        </span>
                      );
                    })}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={cx('wrapper-review')}>
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
      <div className={cx('infomation-review')}>
        <div className={cx('name-review')}>Xuân Huy</div>
        <div className={cx('content-review')}>
          Ấn bản nghệ thuật và văn hóa Ấn Độ 3 Rd..cuốn sách rất hay cho những ai đang chuẩn bị thi công chức.cuốn sách rất hay nên đọc
          một lần..
        </div>
        <div className={cx('date-review')}>Rajesh Dec 2023</div>
      </div>
    </div>
      </div >  */}
      {dataRelate?.length > 1
        && <div div className={cx('wrapper-anotherchoice')} >
          <div className={cx('title-choice')}>Hãy thử nhiều lựa chọn khác</div>
          <div className={cx('wrapper-choice')}>
            {dataRelate.map((item, index) => {
              if (item?.itemId !== dataDetail?.itemId && index < 4)
                return (
                  <div onClick={() => handleNavigation(item)} key={index} className={cx('item-choice')}>
                    <div className={cx('img')}>
                      <img src={item?.fileThumbnail !== null ? `https://diendan.bkt.net.vn/Resourcelib/${item?.fileThumbnail}` : img1} alt="img" />
                    </div>
                    <div className={cx('content')}>
                      <div className={cx('content-name')}>{item?.title}</div>
                      <div className={cx('content-sub')}>{item?.description || "Chưa có thông tin"}</div>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>}

    </div >
  );
}

DetailBook.propTypes = {};

export default DetailBook;
