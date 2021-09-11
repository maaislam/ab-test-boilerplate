// Example Node.js program to append data to file
var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var filePath = 'src/tamperMonkey/config.js';

var data = `
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
`;

rl.question('Set the URL target for you test? ', function (urlTarget) {
  console.log(`${urlTarget}`);

  var urlString = `var targetUrlStr = "${urlTarget}"`;

  //delete the content of the file
  fs.truncate(filePath, 0, function () {
    console.log('done');
    // append data to file
    fs.appendFile(
      'src/tamperMonkey/config.js',
      urlString + data,
      'utf8',
      // callback function
      function (err) {
        if (err) throw err;
        // if no error
        console.log('Data is appended to file successfully.');
        rl.close();
      }
    );
  });
});

rl.on('close', function () {
  console.log('\n Now do npm instal if you already havent followed by npm start.');
  process.exit(0);
});
