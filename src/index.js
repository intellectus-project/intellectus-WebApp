import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import askPushNotificationPermission from './webPush/askPushNotificationPermission';
import PushCredentials from './webPush/pushCredentials'

function pushManagerSubscribe(pushManager) {
    pushManager.subscribe({
      userVisibleOnly: true,
    }).then((sub) => {
      PushCredentials.sendCredentials(
        sub,
      );
    }).catch((e) => {
      if (Notification.permission === 'denied') {
        console.log('Permission for notifications was denied');
      } else {
        console.log('Unable to subscribe to push', e);
      }
    });
  } 
  
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

if (!window.location.href.includes('login')) {
  askPushNotificationPermission()
}

module.hot.accept();
