import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// config routes
import configRoutes from './configRouting';
// components
import DefaultLayout from '~/libraries/layouts/LayoutDefault';
import Loading from '~/libraries/components/AnimationLoading/Animationloading';

export default function MasterRoute() {
  return (
    <Routes>
      {configRoutes.map((route, index) => {
        let Layout = DefaultLayout;
        // if (route.layout === 'navigation') {
        //   Layout = NavigateHeaderLayout;
        // } else {
        //   Layout = DefaultLayout;
        // }
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
