// Check specific todos by clicking
$('ul').on('click', 'li', function() {
	// adds class 'completed' to the li
	$(this).toggleClass('completed');
});

// Click on X to delete
$('ul').on('click', 'span', function(event) {
	// removes li
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	// stops triggering on parent elements
	event.stopPropagation();
});

// Add new todos by entering text into the input element
$('input[type="text"]').keypress(function(event) {
	// checking if the key pressed is the enter key
	if (event.which === 13) {
		// grabbing new todo from input
		var todoText = $(this).val();
		// create new li and add to ul
		$('ul').append('<li><span><i class="fa fa-trash-alt"></i></span> ' + todoText + '</li>');
		// clearing the input
		$(this).val('');
	}
});

// Add functionality to the plus button
$('#toggle-form').click(function() {
	$('input[type="text"]').fadeToggle();
});
