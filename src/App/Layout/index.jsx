import React, { useState } from 'react';

import { Outlet } from 'react-router-dom';
import { CookieBanner } from '../Components/CookieBanner';

import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { ErrorBoundary } from './ErrorBoundary';

import './styles/layout.css';
import { AppAside } from './AppAside';

function getLayoutClassName(withSidebar) {
  return withSidebar ? 'layout with-sidebar' : 'layout';
}

export const Layout = ({ withSidebar }) => {
  const [isAsideVisible, setIsAsideVisible] = useState(false);

  return (
    <ErrorBoundary>
      <div className={getLayoutClassName(withSidebar)}>
        <AppHeader toggleAside={() => setIsAsideVisible(!isAsideVisible)} />
        {withSidebar && <AppAside isAsideVisible={isAsideVisible} />}
        <main>
          <Outlet />
        </main>
        <AppFooter />
        <CookieBanner />
      </div>
    </ErrorBoundary>
  );
};
