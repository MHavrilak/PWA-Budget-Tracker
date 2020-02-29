if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }

  self.addEventListener('install', function(event) {
    var CACHE_NAME = 'my-site-cache';
    var urlsToCache = [
  '/',
  '/css/style.css',
  '/js/app.js'
];

});