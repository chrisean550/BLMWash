$(document).ready(function(){
$("#scroll-main").click(function(){
	$('html, body').animate({scrollTop: ($('#one').offset().top)},1000);
})

$("#scroll-petition").click(function(){
	$('html, body').animate({scrollTop: ($('#petitions').offset().top)},1000);
})
$("#scroll-donation").click(function(){
	$('html, body').animate({scrollTop: ($('#donations').offset().top)},1000);
})
$("#scroll-education").click(function(){
	$('html, body').animate({scrollTop: ($('#education').offset().top)},1000);
})


})