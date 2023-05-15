import iconleft from '~/assets/img/menu/iconleft.png';
//
import download from '~/assets/img/menu/download.png';
import upload from '~/assets/img/menu/upload.png';
//
import archive from '~/assets/img/menu/archive.png';
import messages from '~/assets/img/menu/messages.png';
import settings from '~/assets/img/menu/settings.png';
import { routePath } from '~/routing/pathRouting';

export const menuData = [
  {
    title: 'Danh mục',
    hiddenMenu: false,
    active: true,
    children: [
      { img: iconleft, title: 'Bài Giảng', hiddenMenu: false, children: [] },
      { img: iconleft, title: 'Giáo Án', hiddenMenu: false, children: [] },
      { img: iconleft, title: 'Đề Thi & Kiểm Tra', hiddenMenu: false, children: [] },
      { img: iconleft, title: 'Tư Liệu', hiddenMenu: false, children: [] },
      { img: iconleft, title: 'E-learning', hiddenMenu: false, children: [] },
      { img: iconleft, title: 'Kỹ năng CNTT', hiddenMenu: false, children: [] },
      { img: iconleft, title: 'Khác', hiddenMenu: false, children: [] },
    ],
  },
];

export const menuHistory = [
  {
    title: 'Lịch sử sử dụng',
    hiddenMenu: false,
    active: true,

    children: [
      { title: 'Học liệu đã tải về', path: routePath.downloadedpage, deleteStorage: true, img: download, hiddenMenu: false, children: [] },
      { title: 'Học liệu đã tải lên', path: routePath.updatepage, deleteStorage: true, img: upload, hiddenMenu: false, children: [] },
    ],
  },
];

export const menuOther = [
  {
    title: 'Others',
    hiddenMenu: false,
    active: true,

    children: [
      { title: 'Archive', img: archive, deleteStorage: true, hiddenMenu: false, children: [] },
      { title: 'Messages', img: messages, deleteStorage: true, hiddenMenu: false, children: [] },
      { title: 'Settings', img: settings, deleteStorage: true, hiddenMenu: false, children: [] },
    ],
  },
];
