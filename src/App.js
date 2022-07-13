import './App.css';
import Login from './components/login';
import Logout from './components/logout';
import { gapi } from 'gapi-script';
import React from 'react';

const clientId =
  '401778691077-nn193k0bqltpf1dnn0ujfeimnqm6ufqr.apps.googleusercontent.com';

function App() {
  React.useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client: ', start);
  });

  return (
    <div className='App'>
      <Login />
      <Logout />
    </div>
  );
}

export default App;
