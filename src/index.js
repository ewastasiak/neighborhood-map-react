import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// addEventListener('fetch', function(event) {
//   event.respondWith(
//     fetch(event.request).then(function(response) {
//       if (response.status === 404) {
//         return new Response ("Something went wrong");
//         //respond with a an image
//       }
//       return response;
//     }).catch(function() {
//       return new Response("Everything went wrong somehow!");
//     })
//   );
// })
