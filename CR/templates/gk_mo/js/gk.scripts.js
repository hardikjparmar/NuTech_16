//
jQuery.noConflict();
// cookie function
jQuery.cookie = function (key, value, options) {
    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);
        if (value === null || value === undefined) {
            options.expires = -1;
        }
        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }
    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
//
jQuery(window).load(function() {
	// add the loaded class to 
<!-- Mirrored from www.techfest.org/CR/templates/gk_mo/js/gk.scripts.js by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 14 Dec 2014 08:25:09 GMT -->
<body> with small delay to avoid low framerate	
	setTimeout(function() {
		jQuery('body').addClass('loaded');
	}, 500);
	// style area
	if(jQuery('#gkStyleArea').length > 0){
		jQuery('#gkStyleArea').find('a').each(function(i, element){
			jQuery(element).click(function(e){
				e.preventDefault();
				e.stopPropagation();
				changeStyle(i+1);
			});
		});
	}
	// style area
	if(jQuery('#gkStyleSwitcher').length > 0){
		jQuery('#gkStyleSwitcher').find('a').each(function(i, element){
			jQuery(element).click(function(e){
				e.preventDefault();
				e.stopPropagation();
				changeStyle(i+1);
			});
		});
	}
	// font-size switcher
	if(jQuery('#gkTools').length > 0 && jQuery('#gkMainbody').length > 0) {
		var current_fs = 100;
		
		jQuery('#gkMainbody').css('font-size', current_fs+"%");
		
		jQuery('#gkToolsInc').click(function(e){ 
			e.stopPropagation();
			e.preventDefault(); 
			if(current_fs < 150) {  
				jQuery('#gkMainbody').animate({ 'font-size': (current_fs + 10) + "%"}, 200); 
				current_fs += 10; 
			} 
		});
		jQuery('#gkToolsReset').click(function(e){ 
			e.stopPropagation();
			e.preventDefault(); 
			jQuery('#gkMainbody').animate({ 'font-size' : "100%"}, 200); 
			current_fs = 100; 
		});
		jQuery('#gkToolsDec').click(function(e){ 
			e.stopPropagation();
			e.preventDefault(); 
			if(current_fs > 70) { 
				jQuery('#gkMainbody').animate({ 'font-size': (current_fs - 10) + "%"}, 200); 
				current_fs -= 10; 
			} 
		});
	}
	// system message container auto hide
	if(jQuery('#system-message-container').length > 0){
		jQuery('#system-message-container').each(function(i, element){
			(function() {
				jQuery(element).fadeOut('slow');
			}).delay(3500);
		});
	} 
	// K2 font-size switcher fix
	if(jQuery('#fontIncrease').length > 0 && jQuery('.itemIntroText').length > 0) {
		jQuery('#fontIncrease').click(function() {
			jQuery('.itemIntroText').attr('class', 'itemIntroText largerFontSize');
		});
		
		jQuery('#fontDecrease').click( function() {
			jQuery('.itemIntroText').attr('class', 'itemIntroText smallerFontSize');
		});
	}	
    // gk-tablet animation
    if(jQuery('.gk-tablet').length > 0) {
    	var tablets = jQuery('.gk-tablet');

    	var tabletAnimate = function(tablet, wrapper, speed, interval, amount) {
    		
    		tablet = jQuery(tablet);
    		
    		var state = parseInt(tablet.attr('data-state'), 10);
    		var dir = tablet.attr('data-dir');

    		if(dir == 'next' && state+1 >= amount) {
    			tablet.attr('data-dir', 'prev');
    			tablet.attr('data-state', --state);
    		} else if(dir == 'next' && state+1 < amount) {
    			tablet.attr('data-state', ++state);
    		} else if(dir == 'prev' && state-1 < 0) {
    			tablet.attr('data-dir', 'next');
    			tablet.attr('data-state', ++state);
    		} else {
    			tablet.attr('data-state', --state);
    		}

    		//new Fx.Tween(wrapper, { 'duration': speed, 'unit': '%' }).start('margin-left', -100 * state);
			jQuery(wrapper).animate( {'margin-left': -100*state + '%'}, speed);
    		setTimeout(function() {
    			tabletAnimate(tablet, wrapper, speed, interval, amount);
    		}, interval);	
    	};

    	jQuery(tablets).each(function(i, tablet) {
    		// get basic informations
    		tablet = jQuery(tablet);
    		var amount = parseInt(tablet.attr('data-slides'), 10);
    		var speed = parseInt(tablet.attr('data-speed'), 10) || 500;
    		var interval = parseInt(tablet.attr('data-interval'), 10) || 3000;
    		var wrapper = tablet.find('div div');
    		// check if there is a screenshot to animate
    		if(amount > 1) {
	    		// set basic parameters
	    		tablet.attr('data-state', '0');
	    		tablet.attr('data-dir', 'next');
				// run the animation
				setTimeout(function() {
					tabletAnimate(tablet, wrapper, speed, interval, amount);
				}, interval);
			}
    	});
    }
});

jQuery(document).ready(function() {
	if (!Modernizr.svg) {
		jQuery("img").each(function(i, item) {
			if(jQuery(item).attr('data-fallback') != '') {
				jQuery(item).attr("src", jQuery(item).attr("data-fallback"));
			}
		});
	}
	gkReplaceImages();
});
// function to replace images depending from styles
function gkReplaceImages() {
	// replacing images
	jQuery('img[data-styles="true"]').each(function(i,img) {
		img = jQuery(img);
		var style = 1;
		for(var i = 1; i <= 4; i++) {
			if(jQuery('body').hasClass('style'+i)) {
				style = i;
			}
		}
		img.attr('src', img.attr('src').replace(/\/style[1-4]{1,1}\//, '/style' + style + '/'));
	});
}

// Function to change styles
function changeStyle(style){
	var file1 = $GK_TMPL_URL+'/css/style'+style+'.css';
	var file2 = $GK_TMPL_URL+'/css/typography/typography.style'+style+'.css';
	jQuery('head').append('<link rel="stylesheet" href="%27%2bfile1%2b%27.html" type="text/css" />');
	jQuery('head').append('<link rel="stylesheet" href="%27%2bfile2%2b%27.html" type="text/css" />');
	jQuery.cookie('gk_mo_j30_style', style, { expires: 365, path: '/' });
	
	for(var i = 1; i <= 4; i++) {
			jQuery('body').removeClass('style' + i);
		}
	
		jQuery('body').addClass('style' + style);
		gkReplaceImages();
}
