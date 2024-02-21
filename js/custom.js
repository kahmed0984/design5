// $(document).ready(function(){
// 	$('.mobile_menu_icon').click(function(){
// 		$('nav').css({
// 			'display':'block !important'
// 		});
// 	});
// });



/*----------Jquery Plagin Here-----------
------------Jquery Plagin Here----------*/
$(document).ready(function(){
	
  	// jquery plagin owlCarousel code
  	$('.owl_carousel').owlCarousel({
  		items:1,
  		autoplay:true,
  		autoplayTimeout:3000,
  		autoplayHoverPause:true,
  		loop:true,
  		smartSpeed:1000,
  		nav:true,
  		navText:[
  			'<i class="fa-solid fa-chevron-left"></i>',
	   		'<i class="fa-solid fa-chevron-right"></i>',
  		],
  	});

  	// jquery plagin smoothScroll code
  	$('html').smoothScroll(550);




});


