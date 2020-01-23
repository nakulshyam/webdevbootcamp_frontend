window.setTimeout(function() {
	var todos = [ 'Buy new turtle' ];

	var input = prompt('What would you like to do?');

	while (input !== 'quit') {
		if (input == 'list') {
			listTodos();
		} else if (input == 'new') {
			addTodo();
		} else if (input === 'delete') {
			deleteTodo();
		}

		input = prompt('What would you like to do?');
	}

	console.log('OK, YOU QUIT THE APP');

	function listTodos() {
		console.log('**********');
		todos.forEach(function(todos, i) {
			console.log(i + ': ' + todos);
		});
		console.log('**********');
	}

	function addTodo() {
		var newTodo = prompt('Enter New Todo: ');
		todos.push(newTodo);
		console.log('added todo');
	}

	function deleteTodo() {
		var index = prompt('Enter Index of todo to delete');

		todos.splice(index, 1);
		console.log('deleted todo');
	}
}, 500);
