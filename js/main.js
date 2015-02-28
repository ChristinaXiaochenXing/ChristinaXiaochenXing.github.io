document.addEventListener('DOMContentLoaded', function(){

   document.getElementById("nav-home").addEventListener("click", function(){ 
		$( "#content" ).load( "Home.html" );
   });
   
   document.getElementById("nav-home2").addEventListener("click", function(){ 
		$( "#content" ).load( "Home.html" );
   });
   
   document.getElementById("nav-portfolio").addEventListener("click", function(){ 
		$( "#content" ).load( "Portfolio.html" );
   });
   
   document.getElementById("nav-interest").addEventListener("click", function(){ 
		$( "#content" ).load( "Interest.html" );
   });
   
   document.getElementById("nav-home").click();
 });