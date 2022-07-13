import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../helpers/refreshToken';

const clientId =
  '401778691077-nn193k0bqltpf1dnn0ujfeimnqm6ufqr.apps.googleusercontent.com';

const Login = () => {
  const onSuccess = (res) => {
    console.log('Success: ', res.profileObj);
    console.log('EMAIL: ', res.profileObj.email);

    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Fail: ', res);
  };

  const responseGoogle = async (response) => {
    const userObject = {
      username: response.w3.ofa,
      password: 'test',
    };
    if (response.w3.ofa) {
      await localStorage.setItem('user', JSON.stringify(userObject));
      await window.location.reload();
    } else {
    }
    console.log(response);
  };

  return (
    <>
      <input type='text' placeholder='username' />
      <input type='text' placeholder='password' />
      <button>Login</button>
      <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </>
  );
};

export default Login;
