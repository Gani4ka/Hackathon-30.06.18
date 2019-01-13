"use strict";

/* Header OnScroll Section ----------------------------------------------*/
$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    $('.site-logo').addClass('site-logo--fixed');
    $('.nav').addClass("nav--fixed");
    var styleElem = document.head.appendChild(document.createElement("style"));
    var styleElem2 = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = ".header__wrapper:after {background: #222323;}";
    styleElem2.innerHTML = ".timer::after {top: 390px;}";
  } else {
    $('.site-logo').removeClass("site-logo--fixed");
    $('.nav').removeClass("nav--fixed");

    var _styleElem = document.head.appendChild(document.createElement("style"));

    _styleElem.innerHTML = ".header__wrapper:after {background: transparent;}";
  }
});