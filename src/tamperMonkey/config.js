var targetUrlStr = "https://trydesignlab.com/interaction-design-course/enroll/"
var urlMatched = targetUrl(targetUrlStr);

if (urlMatched) {
  console.log('Tampermonkey is running...');
  var headID = document.getElementsByTagName('head')[0];

  var link = document.createElement('link');
  var script = document.createElement('script');
  var script1 = document.createElement('script');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  script.type = 'text/javascript';
  script1.type = 'text/javascript';

  
  link.href = 'http://localhost:1234/main.css';
  script.src = 'http://localhost:1234/index.js';
  

  script1.src = 'http://localhost:35729/livereload.js?snipver=1';

  headID.appendChild(link);
  headID.appendChild(script);
  headID.appendChild(script1);
}

function targetUrl(urlString) {
  var hasAsterix = urlString.slice(-1) === '*';

  const path = window.location.pathname;
  if ((hasAsterix && urlString.contains(path)) || urlString === window.location.href) {
    return true;
  }
}
