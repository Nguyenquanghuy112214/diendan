// Layout
import { lazy } from 'react';
import { routePath } from './pathRouting';

const configRoutes = [
  {
    path: routePath.dashboardpage,
    element: lazy(() => import('~/pages/DashboardPage')),
    icons: '',
    title: 'Trang chủ',
    hiddenMenu: false,
  },
  {
    path: routePath.detaildocument,
    element: lazy(() => import('~/pages/DetailDocument')),
    icons: '',
    title: 'Chi tiết',
    hiddenMenu: false,
  },
  {
    path: routePath.updatepage,
    element: lazy(() => import('~/pages/UpdatedPage')),
    icons: '',
    title: 'Học liệu đã tải lên',
    hiddenMenu: false,
  },
  {
    path: routePath.downloadedpage,
    element: lazy(() => import('~/pages/DownloadPage')),
    icons: '',
    title: 'Học liệu đã tải lên',
    hiddenMenu: false,
  },

  // Not Found
  {
    path: '*',
    element: lazy(() => import('~/pages/NotFoundPage')),
    title: 'Not Found',
    hiddenMenu: true,
  },
];

export default configRoutes;
