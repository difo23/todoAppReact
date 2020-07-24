import React, { useReducer, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoCreator from './components/TodoCreator';
import todoReducer from './reducer/todoReducer';
import useForm from './hooks/useForm';

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

function App() {
	const [ todos, dispatch ] = useReducer(todoReducer, [], init);

	const [ { description }, handleInputChange, reset ] = useForm({
		description: ''
	});

	useEffect(
		() => {
			localStorage.setItem('todos', JSON.stringify(todos));
		},
		[ todos ]
	);

	const handleDelete = (id) => {
		const action = {
			type: 'delete',
			payload: id
		};

		dispatch(action);
	};

	const handleToggle = (id) => {
		const action = {
			type: 'done',
			payload: id
		};

		dispatch(action);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) {
			return;
		}

		//Nuevo todo dummies
		const newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false
		};

		const action = {
			type: 'add',
			payload: newTodo
		};

		dispatch(action);
		reset();
	};

	return (
		<div id="todoApp">
			<h1 className="title">Todo APP:({todos.length})</h1>
			<hr />

			<TodoCreator onSubmit={onSubmit} onChange={handleInputChange} value={description} />
			<TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
		</div>
	);
}

export default App;
