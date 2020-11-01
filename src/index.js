import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import askPushNotificationPermission from './webPush/askPushNotificationPermission';

const askInstallPermissions = () => {
  if (navigator && navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(() => {
      console.log('Service Worker registered');
    }).catch((error) => {
      console.error('Error during service worker registration: ', error);
    });
  }
};

ReactDOM.render(<App />, document.getElementById('app'));

askInstallPermissions()

module.hot.accept();
