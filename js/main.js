
// навигация
$(function($) {
  $(window).scroll(function(){
      if($(this).scrollTop()>0){
          $('#navigation').addClass('fixed');
      }
      else if ($(this).scrollTop()<1){
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

const infC = document.querySelector('.icon_inf .fas');
infC.onmouseover = function(){
  let infK = document.querySelector('.icon_inf-card');
  infK.classList.add('open');
}
infC.onmouseout = function(){
  let infK = document.querySelector('.icon_inf-card');
  infK.classList.remove('open');
}



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
$(document).ready(function() {
  $('.play_video1').click(function(event) {
    $('.vidos .video-bg').addClass('open1');
    $('body').addClass('lock-video');
    $('.exit-video').addClass('open');
    video1.load();
    video1.play();
  });
  $('.exit-video').click(function(event) {
    $('body').removeClass('lock-video');
    $('.vidos .video-bg').removeClass('open1');
    video1.pause();
    $('.exit-video').removeClass('open');
  });
});

$(document).ready(function() {
  $('.play_video2').click(function(event) {
    $('.vidos .video-bg2').addClass('open2');
    $('body').addClass('lock-video');
    $('.exit-video').addClass('open');
    video2.load();
    video2.play();
  });
  $('.exit-video').click(function(event) {
    $('body').removeClass('lock-video');
    $('.vidos .video-bg2').removeClass('open2');
    video2.pause();
    $('.exit-video').removeClass('open');
  });
});

$(document).ready(function() {
  $('.play_video3').click(function(event) {
    $('.vidos .video-bg3').addClass('open3');
    $('body').addClass('lock-video');
    $('.exit-video').addClass('open');

    video3.load();
    video3.play();
  });
  $('.exit-video').click(function(event) {
    $('body').removeClass('lock-video');
    $('.vidos .video-bg3').removeClass('open3');
    video3.pause();
    $('.exit-video').removeClass('open');
  });
});


/* -------------------------------- for video ------------------------------- */

let videolarge = document.getElementById("video-large");

function playLarge() {
  videolarge.play();
};

videolarge.volume = 0.5;

$(document).ready(function() {
  $('.lightbox').click(function(event) {
    $(' .video-bg-large').addClass('open-large');
    $('body').addClass('lock-video');
    $('.exit-video-large').addClass('open');

    videolarge.load();
    videolarge.play();
  });
  $('.exit-video-large').click(function(event) {
    $('body').removeClass('lock-video');
    $('.video-bg-large').removeClass('open-large');
    videolarge.pause();
    $('.exit-video-large').removeClass('open');
  });
});



$(document).ready(function() {
  $('.share_shudow').click(function(event) {
    $('.ya-share2').toggleClass('open');
    
  });

  $(document).mouseup(function (e){
    let div = $('.share_shudow');
    if (!div.is(e.target) // если клик был не по нашему блоку
              && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.ya-share2').removeClass('open');
    }
  });
});


/* --------------------------------- paralax -------------------------------- */

window.onload = function(){
  const  parallax = document.querySelector('.wrapper');
  if(parallax){
    //обьекты
    const sperLeft = document.querySelector('.shudow_letter');
    const sperRight = document.querySelector('.shudow_text');

    const sperf = document.querySelector('.cf');
    const sperd = document.querySelector('.cd');
    const spera = document.querySelector('.ca');


    //коэфициент
    const forSperLeft = 4;
    const forSperRight = 7;

    const forSperf = 6;
    const forSperd = 7;
    const forSpera = 6;


    const speed = 0.1;
    //обьявление переменных
    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function setMouseParallaxStyle(){
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;
      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      //передаём стили
      sperLeft.style.cssText = `transform: translate(${positionX / forSperLeft}%,${positionY / forSperLeft}%);`;
      sperRight.style.cssText = `transform: translate(${positionX / forSperRight}%,${positionY / forSperRight}%);`;

      sperf.style.cssText = `transform: translate(${positionX / forSperf}%,${positionY / forSperf}%);`;
      sperd.style.cssText = `transform: translate(${positionX / forSperd}%,${positionY / forSperd}%);`;
      spera.style.cssText = `transform: translate(${positionX / forSpera}%,${positionY / forSpera}%);`;


      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();
    parallax.addEventListener("mousemove", function (e) {
      //ПОЛУЧЕНИЕ ШИРИНЫ И ВЫСОТЫ БЛОКА
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;
      //НОЛЬ ПО СЕРЕДИНЕ
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;
      //получаем полценты
      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    });
  }
}
