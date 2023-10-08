import React, { useState } from 'react';
import { AuthUser } from './AuthUser';
import { app } from '../../../Firebase/firebaseConfig';
import { logout } from '../../../Firebase/firebaseClient';
import { useAuthStatus } from './useAuthStatus';

export const AuthFirebase = () => {
  const { isLoggedIn, user } = useAuthStatus();
  return (
    <div>
      <h1>Autoryzacja z Firebase</h1>
      <div>
        {/* {isLoggedIn === null ? (null) : ( */}
        <p>Zainicjowany Firebase</p>
        {isLoggedIn === 'yes' ? (
          <div>
            Jesteś zalogowany
            <button type="button" onClick={logout}>
              Wyloguj
            </button>
          </div>
        ) : (
          <AuthUser />
        )}
      </div>
    </div>
  );
};
