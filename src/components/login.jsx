import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../helpers/refreshToken';

const clientId =
  '401778691077-nn193k0bqltpf1dnn0ujfeimnqm6ufqr.apps.googleusercontent.com';

const Login = () => {
  const onSuccess = (res) => {
    console.log('Success: ', res.profileObj);

    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Fail: ', res);
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </>
  );
};

export default Login;
