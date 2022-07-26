import './App.css';
import Login from './components/login';
import Logout from './components/logout';
import React from 'react';

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const checkLogged = (val) => {
    setLoggedIn(val);
  };

  const updateUser = (val) => {
    setUser(val);
  };

  console.log('LOGGED: ', isLoggedIn);

  return (
    <div className='App'>
      <br />
      <br />
      <h2>{user && `Welcome, ${user?.name}`}</h2>
      <br />
      <br />
      <Login
        checkLogged={checkLogged}
        updateUser={updateUser}
        isLoggedIn={isLoggedIn}
      />

      {/* {!isLoggedIn ? (
        <Login checkLogged={checkLogged} updateUser={updateUser} />
      ) : (
        <Logout checkLogged={checkLogged} updateUser={updateUser} />
      )} */}
      <br />
    </div>
  );
}

export default App;
