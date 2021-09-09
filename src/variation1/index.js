var chooseStartDateSooner = {
  init: function () {
    //this.mainCss();
    this.mainJS();
    console.log('wlalfgsgeqwefsdgdfgfxgwsa');
  },
  mainCss: function () {
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    document.head.appendChild(s).textContent = '';
  },
  mainJS: function () {
    var dropdown = document.querySelector('#date-dropdown-billing');
    dropdown.closest('.form__grid').classList.add('ng-hide');

    // collect dates in step 1

    var dateOptions = document.querySelectorAll('select[name="courseId"] > option');

    var startdates = Array.from(dateOptions)
      .map(function (item, i) {
        if (i > 0) {
          return moment(item.getAttribute('label'), ['MMMMDDY', 'MMMMDDY']).format('MMM Do, Y');
        }
      })
      .filter(Boolean);

    chooseStartDateSooner.renderDateSelector(startdates);
  },
  renderDateSelector: function (dateArr) {
    var headline = document.createElement('div');
    headline.innerHTML = 'Choose start date';
    headline.classList.add('newdate-selector__headline');

    var contactUs = document.createElement('div');
    contactUs.innerHTML = `You can reach out to Admissions prior to the start date if you need to amend this!`;
    contactUs.classList.add('newdate-selector__contact--msg');

    var newDateContainer = document.createElement('div');
    newDateContainer.classList.add('newdate-container');

    var anchorElm = document.querySelector('.form-progress');

    dateArr.forEach((newDate, i) => {
      var singleDate = document.createElement('div');

      singleDate.classList.add('single-date');

      singleDate.innerHTML = newDate;
      newDateContainer.append(singleDate);

      if (i === 0) {
        singleDate.classList.add('selected');
        chooseStartDateSooner.selectActual(i + 1);
      }
      singleDate.addEventListener('click', (e) => {
        Array.from(e.target.closest('.newdate-container').children).forEach((item) => {
          item.classList.remove('selected');
        });

        e.target.classList.add('selected');
        chooseStartDateSooner.selectActual(i);
      });
    });
    anchorElm.insertAdjacentElement('afterend', contactUs);
    anchorElm.insertAdjacentElement('afterend', newDateContainer);
    anchorElm.insertAdjacentElement('afterend', headline);

    this.responsiveHeight(dateArr);
    this.removeComma(dateArr);
  },
  selectActual: function (index) {
    var dropdown = document.querySelector('#date-dropdown-billing');
    dropdown.selectedIndex = index;
    dropdown.dispatchEvent(new Event('change'));
  },
  responsiveHeight: function (dateArr) {
    var dateCount = dateArr.length;

    document.querySelectorAll('.single-date').forEach(function (item) {
      if (dateCount == 2) {
        item.classList.add('small-scrn-height');
      } else {
        item.classList.remove('small-scrn-height');
      }
    });
  },
  removeComma: function (dateArr) {
    var dateCount = dateArr.length;

    var scrnSize = window.matchMedia('(max-width: 484px)').matches;

    if (dateCount >= 3 && scrnSize) {
      document.querySelectorAll('.single-date').forEach(function (item) {
        item.innerText = item.innerText.replace(',', '');
      });
    }
  },
};

(function pollForLoadVariation() {
  if (document.readyState === 'complete') {
    try {
      chooseStartDateSooner.init();
      console.log('RUNNING....Test004 - Enroll - Choosing A Start Date Sooner');
    } catch (error) {
      console.log('Initialization error:', error);
    }
  } else {
    setTimeout(pollForLoadVariation, 25);
  }
})();

/***********************donot copy to after this line******************************/

export default chooseStartDateSooner;
