# Echologyx\_\_ab_testing--setup

1. open terminal (ctrl + ~) and type "npm install".
2. start the setup by typing "npm start"

3. you can use the index.js & main.scss in the root folder to create your AB Test. OR you can create your own folder structure. Just make sure to add the correct path for your js and css in index.html

4. install chrome extension tampermonkey. Right click on the extension icon and go to manage extension, from there allow it access file urls.

5. open the site you want to perform AB test. Click tampermonkey extension and start a new script.
   Within the script type the following:

// ==UserScript==
// @name {Name of the test as given by client}
// @require file://{LOCATION OF config.js file}
// @match {url of the page you want to run the test}
// ==/UserScript==

Once Local development is done use the css from dist folder & find your js obect along with the polling function from index.js inside dist folder.
