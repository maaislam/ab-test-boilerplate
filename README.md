# How To

1. download the zip folder from this [link](https://github.com/maaislam/echologyx-ab-testing-boilerplate/archive/refs/heads/main.zip) and unzip the it. Open the unzipped folder with vs code.

2. open terminal (ctrl + ~), cd into the unzipped folder and type `npm install`.

3. you can use the index.js & main.scss in the root folder to create your AB Test. OR you can create your own folder structure. Just make sure to add the correct path for your js and css (or scss) in index.html

4. install chrome extension tampermonkey. Right click on the extension icon and go to manage extension, from there allow it access file urls.

5. open the site you want to perform AB test. Click tampermonkey extension and start a new script.
   Within the script copy and paste the following:

```
// ==UserScript==
// @name         Echologyx AB Testing Setup
// @require      http://localhost:3000/
// @match        http*://*/*
// ==/UserScript==
```

6. start the setup by typing `npm start`.

Once Local development is done use the css from dist folder & find your js object along with the polling function from index.js inside dist folder.

## Troubleshooting

- In case you get CORS warning in console, please check if the path for @require directive is correct in tampermonkey & also make sure the correct file names are being used in tampermonkey/config.js file.
