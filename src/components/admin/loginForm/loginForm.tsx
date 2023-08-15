import React, { useState } from 'react';
import styles from './loginForm.module.css';

type Data = {
  success: boolean;
  message?: string;
};

type Props = {
  setAuthenticatedValue: (state: boolean) => void;
};

const LoginForm = ({ setAuthenticatedValue }: Props) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitClick = async () => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });
    const data = (await response.json()) as Data;
    setAuthenticatedValue(data.success);
  };

  return (
    <div className={styles.formWrapper}>
      <h1>Admin Login</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={loginData.username}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={changeHandler}
      />
      <button onClick={handleSubmitClick}>Submit</button>
    </div>
  );
};

export default LoginForm;
