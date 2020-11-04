import PushCredentials from './pushCredentials';

function refreshSubscription(subscription) {
  console.log('Refreshing push credentials');
  return subscription.unsubscribe().then(() => {
    PushCredentials.sendCredentials(subscription);
  });
}

export const hasPushPermissions = () => {
  if ('PushManager' in window && 'Notification' in window) {
    const permission = Notification.permission;
    if (permission === 'denied') {
      return true;
    } else if (permission === 'granted') {
      navigator.serviceWorker.ready.then((reg) => {
        reg.pushManager.getSubscription().then((subscription) => {
          if (subscription) {
            refreshSubscription(reg.pushManager, subscription);
          }
        });
      });
      return true;
    } else if (permission === 'default') {
      return false;
    }
  }
  return false;
};
