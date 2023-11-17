import React, { useState } from 'react';

import { Outlet } from 'react-router-dom';
import { CookieBanner } from '../Components/CookieBanner';

import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { ErrorBoundary } from './ErrorBoundary';

import './styles/layout.css';
import { AppAside } from './AppAside';
import { App } from '../../App';

function getLayoutClassName(withSidebar) {
  return withSidebar ? 'layout with-sidebar' : 'layout';
}

export const Layout = ({ withSidebar }) => {
  const [isAsideVisible, setIsAsideVisible] = useState(false);

  // AppAside.onclick = function (e) {
  //   e.stopPropagation();
  // };

  return (
    <ErrorBoundary>
      <div className={getLayoutClassName(withSidebar)}>
        <AppHeader toggleAside={() => setIsAsideVisible(!isAsideVisible)} />
        {withSidebar && (
          <AppAside
            isAsideVisible={isAsideVisible}
            setIsAsideVisible={setIsAsideVisible}
          />
        )}
        <main>
          <Outlet />
        </main>
        <AppFooter />
        <CookieBanner />
      </div>
    </ErrorBoundary>
  );
};
