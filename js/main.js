
// навигация
$(function($) {
  $(window).scroll(function(){
      if($(this).scrollTop()>150){
          $('#navigation').addClass('fixed');
      }
      else if ($(this).scrollTop()<150){
          $('#navigation').removeClass('fixed');
      }
  });
});
// ---------------------------------------------

// бургер меню )
$(document).ready(function() {
  $('.menu-burger__button').click(function(event) {
    $('.menu-burger__button, .menu-burger__list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
// --------------------------------------

// якорь
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
};
// -------------------------------------------------

// ДЛЯ ВИДЕО
var video;
window.onload = function() {
  video = document.getElementById("video");
  
};
function play1() {
  video1.play();
}
function play2() {
    video2.play();  
}
function play3() {
  video3.play();
};
// -----------------------------------------
// маленькие круглые видео
// пуск1
$(document).on('click', '.play_video1', function() {
  $(' .play_video1, .overflow_video1').hide(100);
  $(' video').addClass('open');
});
// --------------------------------
// пуск2
$(document).on('click', '.play_video2', function() {
  $(' .play_video2, .overflow_video2').hide(100);
});
// -------------------------------
// пуск3
$(document).on('click', '.play_video3', function() {
  $(' .play_video3, .overflow_video3').hide(100);
});
// -------------------------------
$(document).ready(function() {
  $('.play_video1').click(function(event) {
    $('.vidos #video1').addClass('open1');
  });
});
$(document).ready(function() {
  $('.play_video2').click(function(event) {
    $('.vidos #video2').addClass('open2');
  });
});
$(document).ready(function() {
  $('.play_video3').click(function(event) {
    $('.vidos #video3').addClass('open3');
  });
});
// ------------------------------------------------

$('a.lightbox').divbox({caption: false});