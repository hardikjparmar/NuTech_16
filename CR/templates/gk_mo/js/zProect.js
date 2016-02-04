//Переменная среди jquery
var $Z = jQuery.noConflict();
var cx;
var stopVideo = function () {
    var iframe = document.querySelector( 'iframe');
    var video = document.querySelector( 'video' );
    if ( iframe !== null ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if ( video !== null ) {
        video.pause();
    }
};

//не дожидаемся окончания загрузки страницы отслеживаем перемещение
$Z(window).scroll(function(){

    //Высота окна браузера
  var HeightScreen = $Z(window).height();

      /*
    Если расстояние от начала страницы до текущего расположения
    документа превышает высоту окна браузера, то отображать кнопку
    вверх, иначе скрывать.
    */

   if (HeightScreen<$Z(document).scrollTop()&&$Z(document).scrollTop()!=0){
      if ($Z("#backup").css("display")=="none"){
        $Z("#backup").stop(1);
        $Z("#backup").fadeIn("slow");
        
      }
    }else{
      if ($Z("#backup").css("display")=="block"){
        $Z("#backup").stop(1);
        $Z("#backup").fadeOut("slow");
        
      }
    }

  
  
  if($Z(window).width()>0){
  var t=$Z(this).scrollTop();
     if(100<t&&t>=0){
       if ($Z("#zDropdown-header").attr("data-opened")=="false"){
       $Z("#zDropdown-header").attr("data-opened","true");
       //$Z("#gkMainMenu").stop(0,1).fadeOut(100);
       }
     }
	 if(100>t&&t==0){
      if ($Z("#zDropdown-header").attr("data-opened")=="true"){  
     $Z("#zDropdown-header").attr("data-opened","false");
     //$Z("#gkMainMenu").stop(0,1).delay(400).fadeIn(300);
      }
    }
               //$(window).scrollTop()+$(window).height()>=$(document).height()-105?
 }

});


// Документ загружен в DOM
$Z(document).ready(function(){


  
  $Z("#backup").click(function(){
//Необходимо прокрутить в начало страницы
var curPos=$Z(document).scrollTop();
var scrollTime=curPos/1.73;
$Z("body,html").animate({"scrollTop":0},scrollTime);
});

  
//Запуск плавной прокрутки
 $Z.localScroll({duration: 600});
  
// Запуск определения позиции при прокрутке
  	$Z('#gkBg').waypoint(function(el) {
$Z('#gkMainMenu a').removeClass("active");
$Z('#zDropdown-header a').removeClass("active");
      
$Z("#gkMainMenu li>.first").addClass("active");
$Z("#zDropdown-header li>.first").addClass("active");      
	});
  
  $Z('#stud').waypoint(function(el) {
$Z('#gkMainMenu a').removeClass("active");
$Z('#zDropdown-header a').removeClass("active");
      
$Z("#gkMainMenu a[href=#stud]").addClass("active");
$Z("#zDropdown-header a[href=#stud]").addClass("active");      
	}, { offset: 150 });
  
  $Z('#rules').waypoint(function(el) {
$Z('#gkMainMenu a').removeClass("active");
$Z('#zDropdown-header a').removeClass("active");
      
$Z("#gkMainMenu a[href=#rules]").addClass("active");
$Z("#zDropdown-header a[href=#rules]").addClass("active");      
	}, { offset: 100 });

  	$Z('#services').waypoint(function(el) {
$Z('#gkMainMenu a').removeClass("active");
$Z('#zDropdown-header a').removeClass("active");
      
$Z("#gkMainMenu a[href=#services]").addClass("active");
$Z("#zDropdown-header a[href=#services]").addClass("active");      
	}, { offset: 100 });

  	$Z('#projects').waypoint(function(el) {
$Z('#gkMainMenu a').removeClass("active");
$Z('#zDropdown-header a').removeClass("active");
      
$Z("#gkMainMenu a[href=#projects]").addClass("active");
$Z("#zDropdown-header a[href=#projects]").addClass("active");      
	}, { offset: 100 });
  
   	$Z('#clients').waypoint(function(el) {
$Z('#gkMainMenu a').removeClass("active");
$Z('#zDropdown-header a').removeClass("active");
      
$Z("#gkMainMenu a[href=#clients]").addClass("active");
$Z("#zDropdown-header a[href=#clients]").addClass("active");      
	}, { offset: 100 });

   	$Z('#contacts').waypoint(function(el) {
$Z('#gkMainMenu a').removeClass("active");
$Z('#zDropdown-header a').removeClass("active");
      
$Z("#gkMainMenu a[href=#contacts]").addClass("active");
$Z("#zDropdown-header a[href=#contacts]").addClass("active");      
	}, { offset: 100 });  
});