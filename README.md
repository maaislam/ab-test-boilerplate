[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

### Languages

![Javascript][javascript-shield]

### Frameworks

![Node js][nodejs-shield] ![Express js][expressjs-shield]

# How To

1. download the zip folder from this [link](https://github.com/maaislam/echologyx-ab-testing-boilerplate/archive/refs/heads/main.zip) and unzip it. Open the unzipped folder with vs code.

2. open terminal (ctrl + ~) and type `npm install`.

3. while npm is installing the dependencies, install chrome extension tampermonkey.

4. Once tamperMonkey installation is complete, Click tampermonkey extension and start a new script.
   Within the script copy and paste the following and press `ctrl + s`:

```
// ==UserScript==
// @name         Echologyx AB Testing Setup
// @require      http://localhost:2345/
// @match        http*://*/*
// ==/UserScript==
```

5. now get back to vs code add target url for your test by typing `npm run set-url-target`. This will prompt for the url, type the target url when you see the prompt 'Set the URL target for you test:' and hit enter.

6. you can use the index.js & main.scss in the root folder to create your AB Test. OR you can create your own folder structure. Just make sure to add the correct path for your js and css (or scss) in index.html

#### P.S. you only need to perform step 4 only once. You do not have to change it for each project.

#### P.S. you only need to perform step 5 everytime a new test starts.

7. start the setup by typing `npm start` & refresh the page (you only have to do it once).

Once Local development is done use the css from dist folder & find your js object along with the polling function from index.js inside dist folder.

## Troubleshooting

- In case your css or js is not updating try deleting the dist & parcel-cache folder and then restart the servers by typing (ctrl + c) followed by `npm start`. You also need to make sure that browser cache is diabled, you can do this by going to the network tab in browser console and checking the box 'Disable cache'.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/maaislam/echologyx-ab-testing-boilerplate/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/arafat-i-24689236/
[javascript-shield]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[nodejs-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[expressjs-shield]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
