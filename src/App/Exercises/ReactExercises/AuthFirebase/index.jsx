import React from 'react';
import { AuthUser } from './AuthUser';
import { logout } from '../../../Firebase/firebaseClient';
import { useAuthStatus } from './useAuthStatus';
import { MainHeader } from '../../../Components/MainHeader';

import './styles.css';

export const AuthFirebase = () => {
  const { isLoggedIn, user } = useAuthStatus();

  return (
    <>
      <MainHeader>Autoryzacja z Firebase</MainHeader>
      {isLoggedIn === null ? null : (
        <div>
          <p>Zainicjowany Firebase</p>
          {isLoggedIn === 'yes' ? (
            <>
              <div>Jesteś zalogowany</div>
              <button type="button" onClick={logout}>
                Wyloguj
              </button>
            </>
          ) : (
            <AuthUser />
          )}
        </div>
      )}
    </>
  );
};
