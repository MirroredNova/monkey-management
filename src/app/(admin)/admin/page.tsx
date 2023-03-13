'use client';

import Dashboard from '@/components/admin/dashboard/dashboard';
import LoginForm from '@/components/admin/loginForm/loginForm';
import React, { useState } from 'react';
import styles from './styles.module.css';

const Page = () => {
  const [authenticated, setAuthenticated] = useState(true);

  const setAuthenticatedValue = (value: boolean) => {
    setAuthenticated(value);
  };

  return (
    <main>
      {authenticated ? (
        <div>
          <Dashboard />
        </div>
      ) : (
        <div>
          <LoginForm setAuthenticatedValue={setAuthenticatedValue} />
        </div>
      )}
    </main>
  );
};

export default Page;
