const SERVER_DOMAIN = process.env.REACT_APP_SERVER_DOMAIN || 'localhost';

export const SOCKET_CONNECTION_URL = 'http://'+SERVER_DOMAIN+':8000';

export const API_CONNECTION_URL = 'http://'+SERVER_DOMAIN+':5001';
