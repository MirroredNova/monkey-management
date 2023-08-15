'use client';

import Dashboard from '@/components/admin/dashboard/dashboard';
import LoginForm from '@/components/admin/loginForm/loginForm';
import React, { useCallback, useState } from 'react';
import styles from './styles.module.css';

const Page = () => {
  const [authenticated, setAuthenticated] = useState(true);

  const setAuthenticatedValue = useCallback((value: boolean) => {
    setAuthenticated(value);
  }, []);

  return (
    <main>
      {authenticated ? (
        <div className={styles.dashboardContainer}>
          <Dashboard />
        </div>
      ) : (
        <div className={styles.loginContainer}>
          <LoginForm setAuthenticatedValue={setAuthenticatedValue} />
        </div>
      )}
    </main>
  );
};

export default Page;
