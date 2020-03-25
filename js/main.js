/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
'use strict';

(function () {
  // Preview slides button
  var activeItem = 0;
  var prevItem = 0;

  var previewSlide = document.getElementsByClassName('preview__slide');
  for (var i = 0; i < previewSlide.length; i++) {
    (function (i) {
      previewSlide[i].addEventListener('click', function () {
        prevItem = activeItem;
        activeItem = i;
        changeActiveItem();
      });
    })(i);
  }

  var changeActiveItem = function () {
    previewSlide[prevItem].classList.remove('preview__slide_Active');
    previewSlide[activeItem].classList.add('preview__slide_Active');
  };

  // Слайдер блока грантовые программы
  var activeProgram = 0;
  var backtArrow = document.querySelector('.programs__click_back');
  var nextArrow = document.querySelector('.programs__click_next');
  var slidesPrograms = document.getElementsByClassName('programs__list_card');
  var widthWindow = document.body.clientWidth;

  window.addEventListener('resize', function () {
    var newWidthWindow = document.body.clientWidth;
    if (widthWindow !== newWidthWindow) {
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  });

  var clicknextArrow = function () {
    nextArrow.addEventListener('click', function () {
      if (widthWindow <= 767) {
        activeProgram >= 0 && activeProgram < slidesPrograms.length - 1 ? ++activeProgram : activeProgram = 0;
      } else if (widthWindow >= 768 && widthWindow <= 1199) {
        activeProgram >= 0 && activeProgram < slidesPrograms.length / 2 - 1 ? ++activeProgram : activeProgram = 0;
      } else if (widthWindow >= 1200) {
        activeProgram >= 0 && activeProgram < slidesPrograms.length / 4 - 1 ? ++activeProgram : activeProgram = 0;
      }
      changeActiveSlide();
    });
  };
  clicknextArrow();

  var clickbacktArrow = function () {
    backtArrow.addEventListener('click', function () {
      if (widthWindow <= 767) {
        activeProgram > 0 ? --activeProgram : activeProgram = slidesPrograms.length - 1;
      } else if (widthWindow >= 768 && widthWindow <= 1199) {
        activeProgram > 0 ? --activeProgram : activeProgram = slidesPrograms.length / 2 - 1;
      } else if (widthWindow >= 1200) {
        activeProgram >= 0 && activeProgram < slidesPrograms.length / 4 - 1 ? ++activeProgram : activeProgram = 0;
      }
      changeActiveSlide();
    });
  };
  clickbacktArrow();

  var changeActiveSlide = function () {
    for (var i = 0; i < slidesPrograms.length; i++) {
      if (widthWindow <= 767) {
        slidesPrograms[i].style.transform = 'translate(' + -(activeProgram * 291) + 'px)';
      } else if (widthWindow >= 768 && widthWindow <= 1199) {
        slidesPrograms[i].style.transform = 'translate(' + -(activeProgram * 642) + 'px)';
      } else if (widthWindow >= 1200) {
        slidesPrograms[i].style.transform = 'translate(' + -(activeProgram * 1344) + 'px)';
      }
    }
  };

  // Слайдер блока грантовые курсы
  var coursesBackArrow = document.querySelector('.courses__click_back');
  var coursesNextArrow = document.querySelector('.courses__click_next');
  var slidesCourses = document.getElementsByClassName('courses__list_card');

  var coursesClickNextArrow = function () {
    coursesNextArrow.addEventListener('click', function () {
      if (widthWindow <= 767) {
        activeProgram >= 0 && activeProgram < slidesCourses.length - 1 ? ++activeProgram : activeProgram = 0;
      } else if (widthWindow >= 768 && widthWindow <= 1199) {
        activeProgram >= 0 && activeProgram < slidesCourses.length / 2 - 1 ? ++activeProgram : activeProgram = 0;
      } else if (widthWindow >= 1200) {
        activeProgram >= 0 && activeProgram < slidesCourses.length / 4 - 1 ? ++activeProgram : activeProgram = 0;
      }
      coursesChangeActiveSlide();
    });
  };
  coursesClickNextArrow();

  var coursesClickBackArrow = function () {
    coursesBackArrow.addEventListener('click', function () {
      if (widthWindow <= 767) {
        activeProgram > 0 ? --activeProgram : activeProgram = slidesCourses.length - 1;
      } else if (widthWindow >= 768 && widthWindow <= 1199) {
        activeProgram > 0 ? --activeProgram : activeProgram = slidesCourses.length / 2 - 1;
      } else if (widthWindow >= 1200) {
        activeProgram >= 0 && activeProgram < slidesCourses.length / 4 - 1 ? ++activeProgram : activeProgram = 0;
      }
      coursesChangeActiveSlide();
    });
  };
  coursesClickBackArrow();

  var coursesChangeActiveSlide = function () {
    for (var i = 0; i < slidesCourses.length; i++) {
      if (widthWindow <= 767) {
        slidesCourses[i].style.transform = 'translate(' + -(activeProgram * 291) + 'px)';
      } else if (widthWindow >= 768 && widthWindow <= 1199) {
        slidesCourses[i].style.transform = 'translate(' + -(activeProgram * 642) + 'px)';
      } else if (widthWindow >= 1200) {
        slidesCourses[i].style.transform = 'translate(' + -(activeProgram * 1344) + 'px)';
      }
    }
  };
})();
