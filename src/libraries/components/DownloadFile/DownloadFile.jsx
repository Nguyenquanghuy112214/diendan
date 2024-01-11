import React from 'react';
import Button from '~/libraries/form/button/Button';

const DownloadWordFile = ({ file, handleDownload }) => {

  let modifiedURL
  const replaceHTMLwithZIP = (url) => {
    const originalString = '/res/index.html';
    const replacementString = '.zip';

    if (url.endsWith(originalString)) {
      const newURL = url.slice(0, -originalString.length) + replacementString;
      return newURL;
    }

    return url; // Trả về URL không thay đổi nếu không kết thúc bằng /res/index.html
  };

  // Sử dụng hàm để thay thế phần cuối của URL
  modifiedURL = replaceHTMLwithZIP(file);
  return (
    <div>
      <Button onClick={handleDownload} outline href={modifiedURL} >
        Download
      </Button>
    </div>
  );
};

export default DownloadWordFile;
