$(function() {

  var link = $('.header__m-menu_link');
  var close = $('.next');
  var menu = $('.m-menu');

  link.on('click', function(event){
    event.preventDefault();
    menu.toggleClass('m-menu__active');
  });

  close.on('click', function(event){
    event.preventDefault();
    menu.toggleClass('m-menu__active');
  });
});
