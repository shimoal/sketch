$(document).ready(function(){

		var valid_size = true;
//generate a new grid after selecting a mode
	$('.mode-button').on('click', function(){
			valid_size = false;
			var current_mode = $(this).val();
 			newSize();
			sketchMode(current_mode);
	});

//building the grid
	function buildGrid(size){
		var dimension = (1000 / size / 10).toString();
		for(var j = 0; j < size; j++){
			for (var i = 0; i< size; i ++){
  			$('#container').append($('<div class="box"></div>').css({'width': dimension + '%', 'height': dimension+'%'}));
			};
	 	 		$('#container').append('<br>');
		};
	};

 	function newSize(){
 		$('#container').empty();
 		while (!valid_size) {
 			var new_size = prompt("what size would you like?");//needs to check for valid input
 			if (new_size < 1 || new_size > 65 || isNaN(new_size))
 				alert("Sorry, that was not a valid size. Please enter a number between 1 and 65.");
 			else
 				valid_size = true;
 		}
		
		
			buildGrid(new_size);
 	};
 	
 	
//functionality for various modes
		function sketchMode(mode){
		switch(mode) {
			case "black":
				$('.box').mouseenter(function(){
	 				$(this).addClass('black');
	 			});
	 			break;
	 		case "red":
				$('.box').mouseenter(function(){
	 				$(this).addClass('red');
	 			});
	 			break;
	 		case "blue":
	 			$('.box').mouseenter(function(){
	 				$(this).addClass('blue');
	 			});
	 			break;
	 		case "rainbow":
	 			$('.box').mouseenter(function() {
	 				var a = Math.floor(Math.random() * 256);
	 				var b = Math.floor(Math.random() * 256);
	 				var c = Math.floor(Math.random() * 256);
	 				$(this).css({'background-color': 'rgb('+a+','+b+','+c+')'});
	 			});
	 			break;
	 		case "fade":
	 			$('#container').removeClass('white');
	 			$('#container').addClass('black');
	 			$('.box').addClass('white');
	 			$('.box').mouseenter(function(){
     				var opacityLevel = $(this).css('opacity');
       			opacityLevel -= 0.2;
    				 $(this).css({ 'opacity': opacityLevel});
   			});
   			break;
   		case "fade-to-white":
   			$('#container').addClass('white');
   			$('.box').addClass('black');
   			$('.box').mouseenter(function(){
     				var opacityLevel = $(this).css('opacity');
       			opacityLevel -= 0.2;
    				 $(this).css({ 'opacity': opacityLevel});
   			});
	 	}
	};

	
	//the initial default grid
	buildGrid(20);
	sketchMode("black");

});