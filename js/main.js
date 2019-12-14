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

$(document).ready(function () {
  $("#menu_header").on("click", "a", function (event) {
    // event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

/**
 *  slider
 */

$(() => {
  $('.jcarousel').jcarousel({

  });
  $('.jcarousel_prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel_next').jcarouselControl({
    target: '+=1'
  });
  $('.jcarousel').jcarousel({
    wrap: 'circular',
    animation: {
      duration: 700,
      easing: 'linear',
    }
  });

  $('.jcarousel').jcarouselAutoscroll({
    interval: 4000,
    target: '+=1',
    autostart: true
  });

});

function initMap() {
  let geo = {
    lat: 40.677963,
    lng: -73.896072
  }
  let map = new google.maps.Map(document.getElementById('section_conact_div1'), {
    zoom: 13,
    center: geo,
     styles: [{
         "elementType": "geometry",
         "stylers": [{
           "color": "#f5f5f5"
         }]
       },
       {
         "elementType": "labels.icon",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#616161"
         }]
       },
       {
         "elementType": "labels.text.stroke",
         "stylers": [{
           "color": "#f5f5f5"
         }]
       },
       {
         "featureType": "administrative.land_parcel",
         "elementType": "labels",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "administrative.land_parcel",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#bdbdbd"
         }]
       },
       {
         "featureType": "poi",
         "elementType": "geometry",
         "stylers": [{
           "color": "#eeeeee"
         }]
       },
       {
         "featureType": "poi",
         "elementType": "labels.text",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "poi",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#757575"
         }]
       },
       {
         "featureType": "poi.business",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "poi.park",
         "elementType": "geometry",
         "stylers": [{
           "color": "#e5e5e5"
         }]
       },
       {
         "featureType": "poi.park",
         "elementType": "labels.text",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "poi.park",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#9e9e9e"
         }]
       },
       {
         "featureType": "road",
         "elementType": "geometry",
         "stylers": [{
           "color": "#ffffff"
         }]
       },
       {
         "featureType": "road.arterial",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "road.arterial",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#757575"
         }]
       },
       {
         "featureType": "road.highway",
         "elementType": "geometry",
         "stylers": [{
           "color": "#dadada"
         }]
       },
       {
         "featureType": "road.highway",
         "elementType": "labels",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "road.highway",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#616161"
         }]
       },
       {
         "featureType": "road.local",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "road.local",
         "elementType": "labels",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "road.local",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#9e9e9e"
         }]
       },
       {
         "featureType": "transit.line",
         "elementType": "geometry",
         "stylers": [{
           "color": "#e5e5e5"
         }]
       },
       {
         "featureType": "transit.station",
         "elementType": "geometry",
         "stylers": [{
           "color": "#eeeeee"
         }]
       },
       {
         "featureType": "water",
         "elementType": "geometry",
         "stylers": [{
           "color": "#c9c9c9"
         }]
       },
       {
         "featureType": "water",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#9e9e9e"
         }]
       }
     ]
  });

  let marker = new google.maps.Marker({
    position: geo,
    map: map,
    icon: '../img/marker.png',
    title: '91 Nolan'
  });
}
