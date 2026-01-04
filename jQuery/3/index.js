// video 158

//Toggle do both hide and show individually
$(".hideTxt").on("click",function(){
  $("h1").hide();
});
$(".showTxt").on("click",function(){
  $("h1").show();
});
$(".toggleTxt").on("click",function(){
  $("h1").toggle();
});

//fade- hide the element with the change it opacity 
$(".fadeIn").on("click",function(){
  $("h1").fadeIn();
});
$(".fadeOut").on("click",function(){
  $("h1").fadeOut();
});
$(".fadeToggle").on("click",function(){
  $("h1").fadeToggle();
});

// Slide - It Hide and show the elemnets using slide animation
$(".slideUp").on("click",function(){
  $("h1").slideUp();
});
$(".slideDown").on("click",function(){
  $("h1").slideDown();
});
$(".slideToggle").on("click",function(){
  $("h1").slideToggle();
});

// Animate - Animation

//opacity:- 
$(".Opacity").on("click",function(){
  $("h1").animate({opacity:0.5});
});
$(".Opacity1").on("click",function(){
  $("h1").animate({opacity:1});
});

//margin:- 
$(".margin50").on("click",function(){
  $("h1").animate({margin:70});
});
$(".margin15").on("click",function(){
  $("h1").animate({margin:15});
});

// Use 3 methods in one - slideUp, SlideDown, Opacity 0.5
$(".Up-Down-5").on("click",function(){
  $("h1").slideUp().slideDown().animate({opacity:0.5});
});

