import React, { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      if (route.authOnly && !isAuth) {
        return false;
      }

      return true;
    });
  }, [isAuth]);

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <Suspense fallback={<PageLoader />}>
              <div className='page-wrapper'>{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default memo(AppRouter);