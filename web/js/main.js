
$('.grid').masonry({
  itemSelector: '.grid-item'
});

//ISOTOP
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
$('.filters-button-group').on( 'click', 'span', function() {
  var filterValue = $( this ).attr('data-filter');
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});



//Slider1
   $(document).ready(function(){
    $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite:true,
    prevArrow:false,
    nextArrow:false,
    autoplay:true,
    autoplaySpeed:4000
   });
});


//GOOGLE Maps
var map = "";
var marker = "";
var mapCenter = {lat: 48.9215, lng: 24.70972};
var infowindow = "";
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 16, 
        center: mapCenter
    });
  marker = new google.maps.Marker({
      position: mapCenter, 
      map: map,
      icon: "web/img/favicon.png"
    });
  google.maps.event.addDomListener(window, 'resize', function(){
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });
};