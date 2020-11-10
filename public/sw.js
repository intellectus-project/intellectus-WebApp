const version = '0.0.5';

self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
  event.waitUntil(self.clients.claim());
});


self.addEventListener('push', (event) => {
  const payload = event.data.json();
  const text = payload.text;

  event.waitUntil(self.registration.showNotification('Intellectus', {
    body: text,
    icon: 'http://intellectus-web.herokuapp.com/favicon.ico',
    badge: 'http://intellectus-web.herokuapp.com/favicon.ico',
  }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(clients.matchAll({
    type: 'window',
  }).then((clientList) => {
    for (let i = 0; i < clientList.length; i++) {
      const client = clientList[i];
      if (client.url === '/' && 'focus' in client) {
        return client.focus();
      }
    }
    if (clients.openWindow) {
      return clients.openWindow('/');
    }
  }));
});

self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});