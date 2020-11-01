import localIpUrl from 'local-ip-url';
import apiCalls from '../../src/services/api-calls/all'

const { registerWebPush } = apiCalls();

/* eslint-disable no-undef */
export default class PushCredentials {
  static sendCredentials(sub) {
    const key = sub.getKey('p256dh');
    const auth = sub.getKey('auth');
    const clientPublicKey = btoa(String.fromCharCode.apply(null, new Uint8Array(key)));
    const clientAuthSecret = btoa(String.fromCharCode.apply(null, new Uint8Array(auth)));

    const bodyEndpoint = {
      ip: localIpUrl('public'),
      endpoint: sub.endpoint,
      p256dh: clientPublicKey,
      auth: clientAuthSecret,
    };
    registerWebPush(bodyEndpoint);
  }
}
/* eslint-enable no-undef */