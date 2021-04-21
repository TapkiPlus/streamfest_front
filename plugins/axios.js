import https from 'https';

export default function ({ $axios }) {
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });
  $axios.onRequest((config) => {
    config.headers.common['Content-Type'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    config.xsrfCookieName = 'csrftoken';
    config.xsrfHeaderName = 'X-CSRFToken';
    const csrfCookie = app.$cookies.get('csrftoken');
    config.headers.common['X-CSRFToken'] = csrfCookie;
  });
}