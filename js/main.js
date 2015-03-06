$(document).ready(function() {
	//add value in text box to list
	$('#add-button').on('click', function() {
		console.log('clicking works');
		$('.shopping-list').append('<li><button class="got-it">Got it!</button><button class="removes-item">I don\'t want this!</button><span class="items"><span>' + $("#item-input").val() + '</li>');
	})
})	