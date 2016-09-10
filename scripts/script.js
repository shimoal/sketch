$(document).ready(function(){
//creating the grid
 var size = 40;

 $('#newSize').click(function(){
 	$('#container').empty();
	size = prompt("what size would you like?");//needs to check for valid input

	var dimension = (1000 / size).toString();
	for(var j = 0; j < size; j++){
		for (var i = 0; i< size; i ++){
  		$('#container').append($('<div class="box"></div>').css({'width': dimension+'px', 'height': dimension+'px'}));
		};
 	 $('#container').append('<br>');
	};


//functionality
  $('.box').mouseenter(function(){
    var opacityLevel = $(this).css('opacity');
      opacityLevel -= 0.2;
    $(this).css({ 'opacity': opacityLevel});
  });

  $('.box').click(function(){
	 $(this).css({'opacity': 1.0});
  });



//buttons
  $('#clear').click(function(){
	 $('.box').css({'opacity': 1.0});
  });

 });
});


