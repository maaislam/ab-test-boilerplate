var basicStructure = {
  init: function () {
    //this.mainCss();
    this.mainJS();
    this.goals();
  },
  mainCss: function () {
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    document.head.appendChild(s).textContent = '' + 'body {\n' + '    border: 2px solid #000;\n' + '}';
  },
  mainJS: function () {
    //For JS
    let yekko = 'tada';
    const test = `hello world ${yekko}`;
    console.log('🚀 ~ file: index.js ~ line 19 ~ test', test);
    function resolveAfter2Seconds() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('resolved');
        }, 2000);
      });
    }

    async function asyncCall() {
      console.log('calling');
      const result = await resolveAfter2Seconds();
      console.log(result);
      // expected output: "resolved"
    }

    asyncCall();
  },
  goals: function () {
    // For Goal/Metric JS
  },
};

(function pollForLoadVariation() {
  if (document.readyState === 'complete' && window.jQuery !== undefined) {
    basicStructure.init();
    console.log('Variation- A: 01');
  } else {
    setTimeout(pollForLoadVariation, 25);
  }
})();
