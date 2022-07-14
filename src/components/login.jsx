import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../helpers/refreshToken';
import { useQuery, gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const clientId =
  '401778691077-fic7jano2ikc4dgds21moo9tckrokshf.apps.googleusercontent.com';

const Login = ({ checkLogged, updateUser }) => {
  const onSuccess = (res) => {
    console.log('Success: ', res.profileObj);
    console.log('ACCESS TOKEN: ', res.accessToken);
    console.log('ID TOKEN: ', res.tokenId);
    console.log('EMAIL: ', res.profileObj.email);
    console.log('EXPIRES IN: ', res.tokenObj.expires_in);
    checkLogged(true);

    updateUser(res.profileObj);
    refreshTokenSetup(res);
    // GRAPHQL HERE
    // const { loading, error, data } = useQuery(GET_LOCATIONS);
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
