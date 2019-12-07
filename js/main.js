let aboutus = document.getElementById('aboutus');
let divaboutus = document.getElementById('divaboutus');

aboutus.onmouseover = () => {
  divaboutus.style.background = 'white';
}

aboutus.onmouseleave = () => {
  divaboutus.style.background = 'transparent';
}

let news = document.getElementById('news');
let divnews = document.getElementById('divnews');

news.onmouseover = () => {
  divnews.style.background = 'white';
}

news.onmouseleave = () => {
  divnews.style.background = 'transparent';
}

let projects = document.getElementById('projects');
let divprojects = document.getElementById('divprojects');

projects.onmouseover = () => {
  divprojects.style.background = 'white';
}

projects.onmouseleave = () => {
  divprojects.style.background = 'transparent';
}

let conact = document.getElementById('conact');
let divconact = document.getElementById('divconact');

conact.onmouseover = () => {
  divconact.style.background = 'white';
}

conact.onmouseleave = () => {
  divconact.style.background = 'transparent';
}

//-----------------------jquery.com

/**
 * плавное перемещение по якорям
 */

$(document).ready(function(){
  $("#menu_header").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});