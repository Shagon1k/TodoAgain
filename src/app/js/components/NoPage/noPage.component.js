import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = (props) => {
	return (
		<div className="no-page">
			Page not found
			<Link to=''>Home</Link>
		</div>
	)
};

export default NoPage;