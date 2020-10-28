import PushCredentials from './pushCredentials';

/* eslint-disable no-undef */
/* eslint-disable no-console */
export default function askPushNotificationPermission() {
  const askNotificationsPermission = () => {
    if (Notification.permission === 'granted') {
      return;
    }
    navigator.serviceWorker.ready.then(reg => {
      reg.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey:
            'BOzOfvuDdVqVMy-luXk2yIGcX56DsfgMg_NSUduh754DgI1Pun_NVA65e_m8vFrHxIPWvEr4YtlgIvj-NXlPtJk'
        })
        .then(sub => {
          PushCredentials.sendCredentials(sub);
        })
        .catch(e => {
          if (Notification.permission === 'denied') {
            console.log('Permission for notifications was denied');
          } else {
            console.log('Unable to subscribe to push', e);
          }
        });
    });
  };

  if ('serviceWorker' in navigator) {
    askNotificationsPermission();
  }
}
