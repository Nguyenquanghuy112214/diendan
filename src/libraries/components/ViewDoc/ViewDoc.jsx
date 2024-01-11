import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

import { useState, useEffect } from 'react';
// react-icon
import { IoIosClose } from 'react-icons/io';
// motion
import { motion, AnimatePresence } from 'framer-motion';

// css module
import classNames from 'classnames/bind';
import styles from './_ViewDoc.module.scss';
const cx = classNames.bind(styles);

function ViewDoc({ active, onClick, data }) {
  const docs = [
    { uri: "http://giamngheo.bkt.net.vn/tailieu/Project.docx" }, // Remote file
  ];

  console.log('detail', data);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const timeLoading = setLoading(false);
      return () => {
        clearInterval(timeLoading);
      };
    }, 2000);
  }, [window.location]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 40, opacity: 0, visibility: 'hidden' }}
        animate={{
          x: active ? 0 : 40,
          opacity: active ? 1 : 0,
          visibility: active ? 'visible' : 'hidden',
        }}
        exit={{ x: 40, opacity: 0 }}
        className={cx('wrapper-modal')}
      >
        {/* <Loading active={loading} /> */}
        <div style={{ position: 'relative', zIndex: 100000 }} className={cx('videoscrom')}>
          <span onClick={() => onClick()} className={cx('close')}>
            <IoIosClose />
          </span>
          <DocViewer
            style={{ height: 1000 }}
            documents={
              [
                {
                  uri: `https://diendan.bkt.net.vn/Resourcelib/${data?.fileLecture}`,
                  fileType: 'docx'
                }
              ]

            }
            pluginRenderers={DocViewerRenderers}
            config={{
              header: {
                disableHeader: false,
                disableFileName: false,
                retainURLParams: false
              }
            }} />;
        </div>
      </motion.div>
      )
    </AnimatePresence>
  );
}

export default ViewDoc;
