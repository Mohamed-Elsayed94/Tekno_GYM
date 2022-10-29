

$(document).ready(function()
 {
      "use strict";
      
  

	$('.carousel').carousel(
   {

  interval: 3000
	});	
//**show color option cive**//
	$(".gear-chek").click(function()
	{

		$(".color-option").fadeToggle();

   

    });

//***change theme***//

var colorLi = $(".color-option ul li");

	colorLi
     		.eq(0).css("background","#e41b17").end()
     		.eq(1).css("background","#60f901").end()
     		.eq(2).css("background","#8991f5").end()
     		.eq(3).css("background","#ffb100");

     colorLi.click(function()

     {
     	$("link[href*='theme']").attr("href",$(this).attr("data-value"));

     });
     //caching the scroll top element
     var scrollButton=$("#scroll-top");

     $(window).on("scroll",function()
     {

      if ( $(this).scrollTop() >=700)
      {
        scrollButton.show();
      }
      else
      {
        scrollButton.hide();
      }
      //click on button to scroll top
      scrollButton.click(function()
      {
          $("html,body").stop().animate({ scrollTop:0 }, 600);
      });

     });

  }); 

//** laoding screen **///

$(window).on('load', function()
{ 
   //loading element

  $(".loading-overlay .sk-cube-grid").fadeOut(1000,
   function()
   {
      $("body").css('overflow','auto');

    $(this).parent().fadeOut(1000,
     function()
     {
      //**show scrol
   

        $(this).remove();
     });

   });
});


 