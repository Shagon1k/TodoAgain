import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routesConfig } from '../routes';


const App = () => (
	<div className="application">
		<Switch>
      {routesConfig.map((route) => (
        <Route
          {...route}
        />
      ))}
		</Switch>
	</div>
)

export default App;