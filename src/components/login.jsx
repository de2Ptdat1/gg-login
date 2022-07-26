import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../helpers/refreshToken';
import { useQuery, gql } from '@apollo/client';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
// import { Calendar } from 'react-date-range';
import Logout from './logout';
import CustomCalendar from './calendar';
import CustomCalendar2 from './calendar2';

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
  '401778691077-nn193k0bqltpf1dnn0ujfeimnqm6ufqr.apps.googleusercontent.com';

const Login = ({ checkLogged, updateUser, isLoggedIn }) => {
  const [startDate, setStartDate] = useState(new Date());
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [data, setData] = useState();

  const onSuccess = (res) => {
    console.log('Success: ', res);
    console.log('ACCESS TOKEN: ', res.accessToken);
    console.log('ID TOKEN: ', res.tokenId);
    console.log('EMAIL: ', res.profileObj.email);
    console.log('EXPIRES IN: ', res.tokenObj.expires_in);
    setData(res);
    checkLogged(true);

    updateUser(res.profileObj);
    refreshTokenSetup(res);
    // GRAPHQL HERE
    // const { loading, error, data } = useQuery(GET_LOCATIONS);
  };

  console.log('data: ', data);

  const onFailure = (res) => {
    console.log('Fail: ', res);
  };

  const handleClearLogOut = () => {
    console.log('clear');
    setData();
  };

  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, 'P')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <>
      {!data && (
        <GoogleLogin
          clientId={clientId}
          buttonText='Login'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />
      )}
      <div style={{ padding: '50px', width: '90%' }}>
        <h1>ACCESS TOKEN: </h1>
        <p>{data?.accessToken}</p>
        <br />
        <h1>ID TOKEN: </h1>
        <p>{data?.tokenId}</p>
      </div>
      {data && <Logout handleClearLogOut={handleClearLogOut} />}
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      {/* <DayPicker
        mode='single'
        required
        selected={selectedDay}
        onSelect={setSelectedDay}
        footer={footer}
      /> */}
      {/* <Calendar date={selectedDay} onChange={(date) => setSelectedDay(date)} /> */}
      <CustomCalendar />
      <br />
      <br />
      <br />
      <br />
      <CustomCalendar2 />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Login;
