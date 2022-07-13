import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId =
  '401778691077-nn193k0bqltpf1dnn0ujfeimnqm6ufqr.apps.googleusercontent.com';

const Logout = () => {
  const onSuccess = (res) => {
    alert('Logout successfully');
  };

  const onFailure = (res) => {
    console.log('Fail: ', res);
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        buttonText='Logout'
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
      />
    </>
  );
};

export default Logout;
