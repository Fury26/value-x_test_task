import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Button from '../../../components/button';
import ChartLine from '../components/char-line';
import './index.css';

const DATA = [
	{ name: 'Landing Page', time: 7.4 },
	{ name: 'Configurator', time: 0.2 },
	{ name: 'Check-out', time: 7.0 },
	{ name: 'Deal', time: 3.8 },
];

const REFRESH_DELAY = 53000;

const Chart: React.FC = () => {
	const [data, setData] = useState(DATA);
	const sum = useMemo(() => data.reduce((prev, { time }) => (prev += time), 0), [data]);

	const getPaddings = (idx: number) => {
		let padding = 0;
		for (let i = 0; i < idx; i++) {
			padding += (data[i].time / sum) * 100;
		}
		return padding;
	};

	const refreshData = () => {
		setData((prev) => prev.map((item) => ({ ...item, time: +(Math.random() * 20).toFixed(2) })));
	};

	const updateDataInTime = useCallback(() => {
		setTimeout(() => {
			refreshData();
			updateDataInTime();
		}, REFRESH_DELAY);
	}, []);

	useEffect(() => {
		updateDataInTime();
	}, [updateDataInTime]);

	return (
		<div className="chart">
			<p className="chart-header">Spent Time(seconds)</p>

			<div className="chart-container">
				{data.map(({ name, time }, idx) => {
					return (
						<ChartLine
							key={idx}
							text={name}
							paddingBefore={getPaddings(idx)}
							width={(time / sum) * 100}
							value={time}
						/>
					);
				})}
			</div>
			<Button onClick={refreshData}>Refresh Data</Button>
		</div>
	);
};

export default Chart;
