import React, { useState } from 'react';
import './styles.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


export const useAuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [user, setUser] = useState(null);
  
    console.log(app.options.appId);
  
    useEffect(() => {
      const auth = getAuth();
      // ponizsza funkcja strzalkowa to callback, ktorą wywoluje firebase ZAWSZE, jak wie ze status sie zmienił
      const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          setUser(user);
          setIsLoggedIn('yes');
          // ...
        } else {
          setUser(null);
          setIsLoggedIn('no');
          // User is signed out
          // ...
        }
      });
      // czyścimy - wychodzimy z kolejki
      return () => unsubscribed();
    }, []);
    return {isLoggedIn, user}
  }