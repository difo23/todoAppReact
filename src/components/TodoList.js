import React from 'react';

const TodoList = ({ todos, handleDelete, handleToggle }) => {
	return (
		<div id="list">
			<h3 className="title">Lista de Todo:</h3>
			<hr />
			<ol>
				{todos.map((todo) => {
					return (
						<li key={todo.id}>
							<p className={todo.done ? 'done' : undefined} onClick={() => handleToggle(todo.id)}>
								{todo.description}
								<button onClick={() => handleDelete(todo.id)} className="borrar">
									{' '}
									Borrar
								</button>
							</p>
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default TodoList;
