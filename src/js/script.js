$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true
  });

  $('.dropdown_body').css({'display':'none'});  
$('.dropdown_title').click(function(){
   $(this).next('.dropdown_body').slideToggle(500)
});
$(".nav__dropdown").click(function(){
  $(".nav__portlet").toggleClass("nav__portlet_active"); return false;
});
});