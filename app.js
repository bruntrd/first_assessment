$(document).ready(function(){
	var counter= 0;

	$(".intro").on('click','#introButton',function(){
		counter++
		$(".fiddlesticks").remove();
			$("#start").append("<div class='fiddlesticks'>The Number of Clicks "+ counter+ "<button id='one'>change color</button> <button id='two'>remove</button></div>");
		$(".fiddlesticks").on('click','#one',function(){
			$(".fiddlesticks").addClass("newColor");

	
		$(".fiddlesticks").on('click','#two',function(){
			$(".fiddlesticks").remove();
			
	
	});
	});
	
	});
	
});