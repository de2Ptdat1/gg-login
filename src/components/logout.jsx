import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '401778691077-nn193k0bqltpf1dnn0ujfeimnqm6ufqr.apps.googleusercontent.com';

const Logout = ({ checkLogged, updateUser, handleClearLogOut }) => {
  const onSuccess = (res) => {
    console.log('logout');
    alert('Logout successfully');
    checkLogged(false);
    updateUser(null);
    handleClearLogOut();
  };

  const onFailure = (res) => {
    console.log('Fail: ', res);
  };

  return (
    <>
      <GoogleLogout
        clientId={clientId}
        buttonText='Logout'
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
      />
    </>
  );
};

export default Logout;
