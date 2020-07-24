import React from 'react';

const TodoCreator = ({ onSubmit, onChange, value }) => {
	return (
		<div id="creator">
			<h3 className="title">Crear Nuevo todo: </h3>
			<hr />
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="description"
					id="description"
					placeholder="Aprender ..."
					autoComplete="off"
					value={value}
					onChange={onChange}
				/>
				<button type="submit"> Crear TODO</button>
			</form>
		</div>
	);
};

export default TodoCreator;
