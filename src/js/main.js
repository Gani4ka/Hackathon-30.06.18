/* Header OnScroll Section ----------------------------------------------*/
$(window).scroll(function () {
  if ($('.timer').offset().top > 171) {
      $('.site-logo').addClass('site-logo--fixed');
      $('.nav').addClass("nav--fixed");
      const styleElem = document.head.appendChild(document.createElement("style"));
      const styleElem2 = document.head.appendChild(document.createElement("style"));
      styleElem.innerHTML = ".header__wrapper:after {background: #222323;}";
      styleElem2.innerHTML = ".timer::after {top: 390px;}";
      } else {
      $('.site-logo').removeClass("site-logo--fixed");
      $('.nav').removeClass("nav--fixed");
      styleElem.innerHTML = ".header__wrapper:after {background: transparent;}";
  }
});

