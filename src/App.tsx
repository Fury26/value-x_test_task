import React from 'react';
import Chart from './pages/chart/container';
import './App.css';

const DATA = [
	{ name: 'Landing Page', time: 7.4 },
	{ name: 'Configurator', time: 0.2 },
	{ name: 'Check-out', time: 7.0 },
	{ name: 'Deal', time: 3.8 },
];

function App() {
	return (
		<div className="App">
			<Chart initData={DATA} />
		</div>
	);
}

export default App;
