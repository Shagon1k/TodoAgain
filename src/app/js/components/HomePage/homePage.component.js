import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
	return (
		<div className="home-page">
			Homepage
			<Link to='/todolist'>TodoList</Link>
		</div>
	)
};

export default HomePage;