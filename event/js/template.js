


    $(function() {
            if (navigator.userAgent.match(/Android/i) || 
                navigator.userAgent.match(/webOS/i) ||
                navigator.userAgent.match(/iPhone/i) || 
                navigator.userAgent.match(/iPad/i)|| 
                navigator.userAgent.match(/iPod/i) || 
                navigator.userAgent.match(/BlackBerry/i)) {                 
                isMobile = true;            
            }
   });




//Preloader


	$(window).load(function() {
		$("#status").fadeOut();
		$("#preloader").delay(350).fadeOut("slow");
	}) 




//Navigation


$(function() { $.scrollIt(); });
$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 800,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: -55           // offste (in px) for fixed top navigation
});







//Home text rotation


      $(".text-bottom .rotate").textrotator({
        animation: "spin",
		separator: "-",
        speed: 3000
      });

	  
	  
	  
//Animations after load	  
	  
	  
$(window).load(function() {
  $("body").removeClass("preload");
});


//IE9 RECOGNITION

function initializeHarmony() {

	"use strict";

	
	if (jQuery.browser.msie && jQuery.browser.version == 9) {

		jQuery('html').addClass('ie9');
	}
	
};	



	



//Animations



	jQuery('.animated').appear();

	jQuery(document.body).on('appear', '.bounceInRight', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-bounceInRight') });
	});	

	jQuery(document.body).on('appear', '.flip', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-flip') });
	});		

	jQuery(document.body).on('appear', '.slide', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-slide') });
	});	

	jQuery(document.body).on('appear', '.bounceInDown', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-bounceInDown') });
	});	
	
	jQuery(document.body).on('appear', '.bounceInLeft', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-bounceInLeft') });
	});
		
	jQuery(document.body).on('appear', '.bounceIn', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-bounceIn') });
	});
	
	jQuery(document.body).on('appear', '.puffIn', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-puffIn') });
	});
	
	jQuery(document.body).on('appear', '.holeIn', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-holeIn') });
	});	
	
	
//Responsive video	
	
  $(document).ready(function(){
    $(".media").fitVids();
  });	
	
	
	



//Scrolling	
	
	
	$(document).ready(
	function() {  
		$("html").niceScroll();
		}
	);	
	
	
	
	
	
	
	
	
//Responsive menu
	
	
$(function(){

   $('ul li a').click(function(){
      var item=$(this).parent();
       $('ul li').removeClass('current');
       item.addClass("current")
    });

});	
$(document).ready(function(){
		
		$("ul#menu").click(function(){
			if( $("ul#menu li").css('display') != 'inline' ){
				if($("ul#menu").hasClass('showmenu')) {
        			$("ul#menu").removeClass('showmenu');
					$("ul#menu li").css('display','none');
    			} else {
					$("ul#menu").addClass('showmenu');
        			$("ul#menu li").css('display','block');
    			}
			}
		});
		
		$(window).resize(function() {
			if( $(window).width() >= 960 ){
				if( $("ul#menu li").css('display' ) == 'none' )
					$("ul#menu li").css('display','inline');
			}
			else{
				$("ul#menu li").css('display','none');
			}
		});
		
	});	
	

	
	
	
	
	
	
	
//Home fit screen	
	
	
	/*global $:false */
	$(function(){"use strict";
		$('.home-top').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('.home-top').css({'height':($(window).height())+'px'});
		});
	});


	
	
	
	
	
//Home grabbing section	


$(document).ready(function() {
 
  var time = 7; // time in seconds
 
  var $progressBar,
      $bar, 
      $elem, 
      isPause, 
      tick,
      percentTime;
 

    //Init the carousel
    $("#home-slide").owlCarousel({
      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem : true,
      afterInit : progressBar,
      afterMove : moved,
      startDragging : pauseOnDragging
    });
 
    //Init progressBar where elem is $("#owl-demo")
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }
 
    //create div#progressBar and div#bar then prepend to $("#owl-demo")
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    }
 
    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    };
 
    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+"%"
         });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
          //slide to next item 
          $elem.trigger('owl.next')
        }
      }
    }
 
    //pause while dragging 
    function pauseOnDragging(){
      isPause = true;
    }
 
    //moved callback
    function moved(){
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }
 
    //uncomment this to make pause on mouseover 
    // $elem.on('mouseover',function(){
    //   isPause = true;
    // })
    // $elem.on('mouseout',function(){
    //   isPause = false;
    // })
 
});




	
//Services Slider	
	
	$(document).ready(function(){
		$('.bxslider').bxSlider({
			adaptiveHeight: true,
			touchEnabled: true,
			pager: false,
			controls: true,
			auto: false,
			slideMargin: 1
		});
	});	




	
//Services grabbing section


$(document).ready(function() {
 
  $("#desk-slide").owlCarousel({
    navigation : false,
    slideSpeed : 600,
    autoHeight : false,
    autoPlay : true,
	autoPlay : 4000,
      items : 1,
      itemsDesktop : [1000,1], 
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1], 
      itemsMobile : false 
  });
 
});	

$(document).ready(function() {
 
  $("#mobile-slide").owlCarousel({
    navigation : false,
    slideSpeed : 600,
    autoHeight : false,
    autoPlay : true,
	autoPlay : 4000,
      items : 1,
      itemsDesktop : [1000,1], 
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1], 
      itemsMobile : false 
  });
 
});		
	

$(document).ready(function() {
 
  $("#tablet-slide").owlCarousel({
    navigation : false,
    slideSpeed : 600,
    autoHeight : false,
    autoPlay : true,
	autoPlay : 4000,
      items : 1,
      itemsDesktop : [1000,1], 
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1], 
      itemsMobile : false 
  });
 
});		
	
	
	
	
//Testimonials grabbing section	


$(document).ready(function() {
 
  $("#testi").owlCarousel({
    navigation : false,
    autoPlay : true,
	autoPlay : 3000,
    stopOnHover : false,
    goToFirst : true,
    goToFirstSpeed : 1000,
    slideSpeed : 600,
    autoHeight : true,
      items : 1,
      itemsDesktop : [1000,1], 
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1], 
      itemsMobile : false 
  });
 
});		
	
	
	
//Work grabbing section	


$(document).ready(function() {
 
  $("#work-project").owlCarousel({
    navigation : false,
    slideSpeed : 600,
    autoHeight : false,
      items : 1,
      itemsDesktop : [1000,1], 
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1], 
      itemsMobile : false 
  });
 
});		





//Clients grabbing section


$(document).ready(function() {
 
  $("#clients-logo").owlCarousel({
    navigation : false,
    slideSpeed : 600,
    autoHeight : false,
      items : 5,
      itemsDesktop : [1000,5], 
      itemsDesktopSmall : [900,4],
      itemsTablet: [600,2], 
      itemsMobile : false 
  });
 
});	



//Colorbox single project pop-up

$(document).ready(function(){
$(".iframe").colorbox({iframe:true, width:"100%", height:"100%"});	
});

$(".group1").colorbox({rel:'group1'});	







//Parallax effects 
	
$(document).ready(function(){
		$('.parallax2').parallax("50%", 0.5);
	});





	
	
//Google map	
	
/*global $:false */
    var map;
    $(document).ready(function(){"use strict";
      map = new GMaps({
    disableDefaultUI: true,
    scrollwheel: false,
        el: '#map',
        lat: 44.789511,
        lng: 20.43633
      });
      map.drawOverlay({
        lat: map.getCenter().lat(),
        lng: map.getCenter().lng(),
        layer: 'overlayLayer',
        content: '<div class="overlay"></div>',
        verticalAlign: 'center',
        horizontalAlign: 'center'
      });
        var styles = [  
  {
    "elementType": "labels.icon",
    "stylers": [
      { "weight": 0.3 },
      { "saturation": -100 },
      { "lightness": 25 },
      { "visibility": "off" }
    ]
  },{
    "stylers": [
      { "hue": "#EC572C" },
      { "lightness": 39 }
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "simplified" }
    ]
  }
        ];
        
        map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });
        
        map.setStyle("map_style");	  
    });		

	
	
	
	