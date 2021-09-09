console.log('Tampermonkey is running...');
var headID = document.getElementsByTagName('head')[0];
var bodyID = document.getElementsByTagName('body')[0];
var link = document.createElement('link');
var script = document.createElement('script');
var script1 = document.createElement('script');
link.type = 'text/css';
link.rel = 'stylesheet';
script.type = 'text/javascript';
script1.type = 'text/javascript';

/**************************change file names here from dist folder**********************************/
link.href = 'http://localhost:1234/main.css';
script.src = 'http://localhost:1234/index.js';
/**************************************************************r**********************************/

script1.src = 'http://localhost:35729/livereload.js?snipver=1';

headID.appendChild(link);
headID.appendChild(script);
headID.appendChild(script1);
