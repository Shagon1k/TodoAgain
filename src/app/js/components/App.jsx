import React from 'react';
import HomePage from './HomePage';
import TodoList from './TodoList';
import NoPage from './NoPage';
import { Route, Redirect, Switch, Link } from 'react-router-dom';


const App = () => (
	<div className="application">
		<Switch>
			<Route key="todo-list" path="/todolist" component={TodoList} />
			<Route key="home" exact path="/" component={HomePage} />
			<Route key="nopage" path="*" component={NoPage} />
		</Switch>
	</div>
)

export default App;