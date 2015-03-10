$(document).ready(function() {
	//alert if input value empty on click
	//add value from text box to list
	//empty input box value after click
	$('#add-button').on('click', function() {
		console.log('add clicked');
		if($('#input-box').val().length==0) {
			alert('Y\'all Need To Write Something, Hear?')
		} else {
		$('.whole-shopping-list').append('<li class="list-items"><button class="got-it">Got It!</button><button class="remove-item">I don\'t want this!</button>' + $('#input-box').val() + '</li>');
		}
		$('#input-box').val("");	
	});
	//Pushing enter works same as clicking add
	$('#input-box').on('keydown', function(enter) {
		if(enter.keyCode == 13) {
			event.preventDefault();
			$('#add-button').click();
		}
	});
	//cross out items in cart and re-click to undo
	//remove item....removes items!
	$('.whole-shopping-list').on('click','.got-it', function() {
		$(this).closest('li').toggleClass('strike-through');
	})
	.on('click','.remove-item', function() {
		$(this).closest('li').fadeOut();
	});
	//clicking reset clears the whole list and any value left in input
	$('#reset-button').on('click', function () {
		$('.list-items').fadeOut();
		$('#input-box').val("");
	});
	


});//final close
