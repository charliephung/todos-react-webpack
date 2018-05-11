import React, { Component } from 'react';

import Menu from './../Menu/Menu';
import routes from './../../routes';
import { Route, Switch, BrowserRouter as Router, HashRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
	render() {
		return (
			<HashRouter>
				{/* Div must be wrap inside <Router/> */}
				<div>
					<Menu />
					<div className="container">
						<div className="row">
							{
								/* <button type="button" className="btn btn-primary">Add product</button>
								<br />
								<ProductsList /> */
							}
							{this.showContent(routes)}
						</div>
					</div>
				</div>
			</HashRouter>

		);
	}
	showContent = routes => {
		let result = null;

		if (routes.length > 0) {
			result = routes.map((ele, index) => {
				// Create route from data in routes from './components/ProductsList/ProductsList'
				return (<Route
					key={index}
					path={ele.path}
					exact={ele.exact}
					// Component will expect a function
					component={ele.main} />);

			});
		}

		// Switch case routes
		return <Switch>{result}</Switch>
	}
}

export default App;
