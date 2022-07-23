import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './containers/Landing';
import Post from './containers/Post';
import User from './containers/User';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/post' element={<Post />} />
				<Route path='/user' element={<User />} />
			</Routes>
		</Router>
	);
}

export default App;
