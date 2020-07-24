const todoReducer = (state, action) => {
	switch (action.type) {
		case 'add':
			//Agregar nuevo Item
			console.log(`Todo Reducer ${action.type}`);
			return [ ...state, action.payload ];
		case 'delete':
			//Agregar nuevo Item
			console.log(`Todo Reducer ${action.type}`);
			return state.filter((todo) => todo.id !== action.payload);
		case 'done':
			//Agregar nuevo Item
			console.log(`Todo Reducer ${action.type}`);
			return state.map((todo) => {
				return todo.id === action.payload ? { ...todo, done: !todo.done } : todo;
			});

		default:
			break;
	}

	return state;
};

export default todoReducer;
