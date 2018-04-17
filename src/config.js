
module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: 'https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?' || '',
    //Client Api key
    clientKey: 'apikey=qW31pdJuYnrE9qnoXbA7FmTbc18IYgDG&' || '',
    // API URL to be used in the server-side code
    serverUrl:
    process.env.API_SERVER_URL ||
    `http://localhost:${process.env.PORT || 3000}`,
  },
  googleMap: {
    key: 'AIzaSyBJ2n-pBl_-IRzhGA7MTpIG3udWuY1DM7k' || '',
  },
};
