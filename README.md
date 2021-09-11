# How To

1. download the zip folder from this [link](https://github.com/maaislam/echologyx-ab-testing-boilerplate/archive/refs/heads/main.zip) and unzip the it. Open the unzipped folder with vs code.

2. open terminal (ctrl + ~), cd into the unzipped folder and type the following  
  ```sh
  npm install
  ```

3. ehile npm is installing dependencies, install chrome extension tampermonkey. Right click on the extension icon and go to manage extension, from there allow it access file urls.

4. Once tamperMonkey installation is complete, Click tampermonkey extension and start a new script.
   Within the script copy and paste the following:

```
// ==UserScript==
// @name         Echologyx AB Testing Setup
// @require      http://localhost:2345/
// @match        http*://*/*
// ==/UserScript==
```

5. now add target url for your test by typing the following 
```sh
npm run set-url-target
```
This will prompt for the url type the target url when you see the prompt 'Set the URL target for you test:' and hit enter.

6. you can use the index.js & main.scss in the root folder to create your AB Test. OR you can create your own folder structure. Just make sure to add the correct path for your js and css (or scss) in index.html

### P.S. you only need to perform step 4 only once. You do not have to change it for each project.

### P.S. you only need to perform step 5 everytime a new test starts. You do not have to change it for each project.

7. start the setup by typing 
  ```sh
  npm start
  ```
& refresh the page (you only have to do it once).

Once Local development is done use the css from dist folder & find your js object along with the polling function from index.js inside dist folder.

## Troubleshooting

- In case your css or js is not updating try deleting the dist & parcel-cache folder and then restart the servers by typing (ctrl + c) followed by `npm start`. You also need to make sure that browser cache is diabled, you can do this by going to the network tab in browser console and checking the box 'Disable cache'.
