import React from 'react';
import { Link } from 'react-router-dom';

const TodoList = (props) => {
	return (
		<div className="todo-list">
			TodoList
			<Link to='/'>Go home</Link>
		</div>
	)
};

export default TodoList;