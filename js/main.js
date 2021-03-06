document.addEventListener('DOMContentLoaded', function(){

	//Navigation
   var navHome = document.getElementById("nav-home");
   var navResume = document.getElementById("nav-resume");
   var navPortfolio = document.getElementById("nav-portfolio");
   var navInterest = document.getElementById("nav-interest")
	
   navHome.addEventListener("click", function(){ 
		$( "#content" ).load( "Home.html" );
		clickOnNav('#nav-home');
		window.scrollTo(0, 0);
   });
   
   navResume.addEventListener("click", function(){ 
		$( "#content" ).load( "Resume.html" );
		clickOnNav('#nav-resume');
		window.scrollTo(0, 0);
   });
   
   navPortfolio.addEventListener("click", function(){ 
		$( "#content" ).load( "Portfolio.html" );
		clickOnNav('#nav-portfolio');
		window.scrollTo(0, 0);
   });
   
   navInterest.addEventListener("click", function(){ 
		$( "#content" ).load( "Interest.html" );
		clickOnNav('#nav-interest');
		window.scrollTo(0, 0);
   });
   
   navHome.click();
   
   function clickOnNav(element){
	$('#nav-resume').removeClass('active');
	$('#nav-portfolio').removeClass('active');
	$('#nav-interest').removeClass('active');
	$(element).addClass('active');
   }
   
	$('.nav a').on('click', function(){
		 $('#navbar').collapse('hide');
	});

	$('#nav-home').on('click', function(){
		 $('#navbar').collapse('hide');
	});
	
	$('body').on('click', '.nav-sidebar li', function() {
	$('.nav-sidebar li').removeClass('active');
	$(this).addClass('active');
	});	
var offset = 80;
$('body').on('click', '.nav-sidebar li a', function() {
	event.preventDefault();
	$($(this).attr('href'))[0].scrollIntoView();
	scrollBy(0, -offset);
});


   $(window).load(function() {
		$('#loading').fadeOut(300, function() {
			$('#main-body').fadeIn(300);
		});
	});
   
 });