import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// config routes
import configRoutes from './configRouting';
// components
import LayoutDefault from '~/libraries/layouts/LayoutDefault';
import LayoutNoNavbar from '~/libraries/layouts/LayoutNoNavbar';
import Loading from '~/libraries/components/AnimationLoading/Animationloading';

export default function MasterRoute() {
  return (
    <Routes>
      {configRoutes.map((route, index) => {
        let Layout = LayoutDefault;
        if (route.layout === 'nonavbar') {
          Layout = LayoutNoNavbar;
        } else {
          Layout = LayoutDefault;
        }
        const Page = route.element;
        return (
          <Route
            path={route.path}
            element={
              <Layout title={route.title}>
                <Suspense fallback={<Loading />}>
                  <Page />
                </Suspense>
              </Layout>
            }
            key={index}
          ></Route>
        );
      })}
    </Routes>
  );
}
