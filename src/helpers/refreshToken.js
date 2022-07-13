export const refreshTokenSetup = (res) => {
  // timing tor renew access token
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log('new auth: ', newAuthRes);
    // saveUserToken(newAuthRes.access_token) <-- save new token
    console.log('new auth token: ', newAuthRes.id_token);

    // setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
  };

  // setup first refresh timer
  setTimeout(refreshToken, refreshTiming);
};
