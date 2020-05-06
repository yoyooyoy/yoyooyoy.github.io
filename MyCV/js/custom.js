$(document).ready(function(){
	// body...
	// headercolor
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $headercolor = $(".js-header");
		if (scrollDistance > 80) {
			$headercolor.addClass("header-color");
		}
		else{
			$headercolor.removeClass("header-color");
		}
	})
	// animate
	if (screen.width > 768) {
		new WOW().init();
	}
	
	// photoslide
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:true
})
});