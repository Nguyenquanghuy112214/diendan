import React from 'react';
import PropTypes from 'prop-types';
// motion
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, tranformY } from '~/constants/motion';
// redux
import useCloseModal from '~/hooks/redux/closemodal/useCloseModal';
import useOpenModalHelp from '~/hooks/redux/openmodalhelp/useOpenModalHelp';
// img
import { imgModal } from '~/assets/img/modal';
// component
import ModalPage1 from '../ModalPage1/ModalPage1';
import ModalPage2 from '../ModalPage2/ModalPage2';
import ModalPage3 from '../ModalPage3/ModalPage3';
import ModalPage4 from '../ModalPage4/ModalPage4';
import ModalPage5 from '../ModalPage5/ModalPage5';
import ModalPageHelp from '../ModalPageHelp/ModalPageHelp';
// Css module
import classNames from 'classnames/bind';
import styles from './_Modal.module.scss';
const cx = classNames.bind(styles);
function Modal() {
  const { isActiveModal, setActiveModal } = useCloseModal();
  const { isActiveModalHelp, setActiveModalHelp } = useOpenModalHelp();
  const { close, help } = imgModal;
  const tabs = [
    {
      component: <ModalPage1 />,
    },
    {
      component: <ModalPage2 />,
    },
    {
      component: <ModalPage3 />,
    },
    {
      component: <ModalPage4 />,
    },
    {
      component: <ModalPage5 />,
    },
  ];
  const fakeData = 3;
  const closeModal = () => {
    setActiveModal(false);
  };
  const openModalHelp = () => {
    setActiveModalHelp(true);
  };
  const closeModalHelp = () => {
    setActiveModalHelp(false);
  };
  return (
    <AnimatePresence>
      {/* Modal page */}
      {isActiveModal && !isActiveModalHelp && (
        <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" exit="exit" className={cx('wrapper')}>
          <motion.div variants={tranformY(0.2, 1, true)} className={cx('wrapper-detail')}>
            <div className={cx('title')}>{fakeData === 3 ? 'Đưa bài giảng lên thư viện' : 'CHỌN LOẠI TÀI LIỆU MUỐN GỬI LÊN'}</div>
            <span onClick={openModalHelp} className={cx('help')}>
              <img src={help} alt="help" />
            </span>
            <span onClick={closeModal} className={cx('img')}>
              <img src={close} alt="" />
            </span>
            <div className={cx('children')}>
              {tabs.map((tab, index) => {
                if (index === 2) {
                  return <div key={index}>{tab.component}</div>;
                }
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
      {/* Modal hepler */}
      {isActiveModalHelp && (
        <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" exit="exit" className={cx('wrapper')}>
          <motion.div variants={tranformY(0.2, 1, true)} className={cx('wrapper-detail')}>
            <div className={cx('title')}>{fakeData === 3 ? 'Đưa bài giảng lên thư viện' : 'CHỌN LOẠI TÀI LIỆU MUỐN GỬI LÊN'}</div>
            <span className={cx('help')}>
              <img src={help} alt="help" />
            </span>
            <span onClick={closeModalHelp} className={cx('img')}>
              <img src={close} alt="" />
            </span>
            <div className={cx('children')}>
              <ModalPageHelp />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Modal.propTypes = {
  active: PropTypes.bool,
};

export default Modal;

// import PersonalInfomationHandles from '~/handles/terms/personalInformation/personalInformation.handle';
// import PersonalInfomationClientHandles from '~/handles/terms/personalInformation/personalInformationClient.handle';
// import PersonalInfomationUserHandles from '~/handles/terms/personalInformation/personalInformationUser.handle';
// import { TabItemComponent } from '~/types/pages/terms.type';
// import { TYPE_TERMS } from '~/utils/const/terms';
// import PersonalInformationForm from './personalInformationForm';
// import styles from './style.module.scss';

// const PersionalInformationComponent = () => {
//   const { tagNameUrl, handleClickTab } = PersonalInfomationHandles();
//   const tabs: TabItemComponent[] = [
//     {
//       label: 'クライアント',
//       component: <PersonalInformationForm personalInfomationHandles={PersonalInfomationClientHandles} />,
//       tagName: TYPE_TERMS.COMPANY,
//     },
//     {
//       label: 'ユーザー',
//       component: <PersonalInformationForm personalInfomationHandles={PersonalInfomationUserHandles} />,
//       tagName: TYPE_TERMS.USER,
//     },
//   ];
//   return (
//     <div className={styles.tabWrapper}>
//       <div className={styles.tabs}>
//         {tabs.map((tab: TabItemComponent) => {
//           return (
//             <div
//               className={tagNameUrl === tab.tagName ? `${styles.tabItem} ${styles.tabActive}` : styles.tabItem}
//               key={tab.tagName}
//               onClick={() => handleClickTab(tab.tagName)}
//             >
//               <span>{tab.label}</span>
//             </div>
//           );
//         })}
//       </div>
//       <div className={styles.tabContent}>{tabs.find((item: any) => item.tagName === tagNameUrl)?.component}</div>
//     </div>
//   );
// };
// export default PersionalInformationComponent;
