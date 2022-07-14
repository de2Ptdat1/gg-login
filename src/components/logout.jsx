import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '401778691077-fic7jano2ikc4dgds21moo9tckrokshf.apps.googleusercontent.com';

const Logout = ({ checkLogged, updateUser }) => {
  const onSuccess = (res) => {
    console.log('logout');
    alert('Logout successfully');
    checkLogged(false);
    updateUser(null);
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
