import React, { useCallback, useRef, useState } from 'react';
import { User } from '../user/index';
import { LoginSocialGoogle } from 'reactjs-social-login';

import { GoogleLoginButton } from 'react-social-login-buttons';

const clientId =
  '401778691077-nn193k0bqltpf1dnn0ujfeimnqm6ufqr.apps.googleusercontent.com';

const TestLogin = () => {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState();
  const googleRef = useRef(null);

  const onLoginStart = useCallback(() => {
    alert('login start');
  }, []);

  const onLogoutFailure = useCallback(() => {
    alert('logout fail');
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const onLogout = useCallback(() => {
    console.log('log: ', provider);
    switch (provider) {
      case 'google':
        googleRef.current?.onLogout();
        break;
      default:
        break;
    }
  }, [provider]);

  return (
    <>
      {provider && profile && (
        <User
          provider={provider}
          profile={profile}
          onLogout={onLogoutSuccess}
        />
      )}
      <div className={`App ${provider && profile ? 'hide' : ''}`}>
        <h1 className='title'>ReactJS Social Login</h1>
        <LoginSocialGoogle
          ref={googleRef}
          client_id={clientId}
          onLogoutFailure={onLogoutFailure}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
      </div>
    </>
  );
};

export default TestLogin;
