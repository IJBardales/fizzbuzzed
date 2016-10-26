// $(document).ready(function(){
//  		$('#number-chooser').submit(function(event) {
//  			event.preventDefault();
//  			var numberEntered = $('#number-choice').val();
//  			for(var i = 0; i <= numberEntered; i++) {
//  				document.write(i + "<br>");
//  			}			
//  		});
//  });





// $(document).ready(function(){
//  		$('#number-chooser').submit(function(event) {
//  			event.preventDefault();
//  			var numberEntered = $('#number-choice').val();
//  			for(var i = 0; i <= numberEntered; i++) {
//  				if ( i % 5 === 0  && i % 3 ===0) {
//  					document.write("fizzbuzz" + "<br>");
//  				}	else if (i % 5 ===0) {
//  					document.write("buzz" + "<br>");
//  				} else if (i % 3 === 0) {
//  							document.write("fizz" + "<br>");
//  				}	
//  				else {
//  								document.write(i + "<br>");
//  					}
//  			}		
//  		});
//  })




// $(document).ready(function(){
// 		$('.js-results').add('div').addClass('fizz-buzz-item');
//  		$('fizz-buzz-item').add('span');
//  		$('#number-chooser').submit(function(event) {
//  			event.preventDefault();
//  			var numberEntered = $('#number-choice').val();
//  			for(var i = 0; i <= numberEntered; i++) {
//  				if ( i % 5 === 0  && i % 3 ===0) {
//  					$('.js-results').append("<p>fizzbuzz</p>");
//  				}	else if (i % 5 ===0) {
//  					$('.js-results').append("<p>buzz</p>");
//  				} else if (i % 3 === 0) {
//  							$('.js-results').append("<p>fizz</p>");
//  				}	
//  				else {
//  								$('.js-results').append(i + "<br>");
//  					}
//  			}		
 			
//  		});
//  });




$(document).ready(function(){
		
 		$('#number-chooser').submit(function(event) {
 			event.preventDefault();
 			var numberEntered = $('#number-choice').val();	
 			for(var i = 1; i <= numberEntered; i++) {
 				$('.js-results').append('<div class="fizz-buzz-item"></div>');
 				$('.fizz-buzz-item').append('<span></span>');
 				if ( i % 5 === 0  && i % 3 === 0) {
 					$('.fizz-buzz-item span').append("fizzbuzz");
 				}	else if (i % 5 === 0) {
 						$('.fizz-buzz-item span').append("buzz");
 				} else if (i % 3 === 0) {
 						$('.fizz-buzz-item span').append("fizz");
 				}	
 				else {
 						$('.fizz-buzz-item span').append(i);
 					}
 			}		
 			
 		});
 });






// $(document).ready(function(){
//  		$('#number-chooser').submit(function(event) {
//  			event.preventDefault();
//  			var numberEntered = $('#number-choice').val();
//  			for(var i = 0; i <= numberEntered; i++) {		
// 				if ( i % 15 ===0) {
// 						$('.js-results').append('<div class="fizz-buzz-item"></div>');
// 						$('.fizz-buzz-item').append('<span></span>');
// 						$('span').addClass('superduper');
// 						$('.fizz-buzz-item').addClass('.fizzbuzz');
// 						$('.fizz-buzz-item span').append('<p>fizzbuzz</p>');
// 				}	else if (i % 5 ===0) {
// 						$('.js-results').append('<div class="fizz-buzz-item buzz"><span class="superduper">buzz</span></div>');
						
// 				// } else if (i % 3 === 0) {
// 				// 		$('.js-results').append('<div class="fizz-buzz-item"></div>');
// 				// 		$('.fizz-buzz-item').append('<span></span>');
// 				// 		$('span').addClass('superduper');
// 				// 		$('.fizz-buzz-item').addClass('.fizz')
// 				// 		$('.fizz-buzz-item span').append("<p>fizz</p>");
// 				//}	
// 					// else {
// 					// 		$('.fizz-buzz-item span').append(i + "<br>");
// 						}
//  			}		
 			
//  		});
//  });