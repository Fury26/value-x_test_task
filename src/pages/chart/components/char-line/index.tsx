import React from 'react';
import './index.css';

type Props = {
	width: number;
	paddingBefore: number;
	text: string;
	value: number;
};

const ChartLine: React.FC<Props> = ({ width, paddingBefore, text, value }) => {
	return (
		<div className="chart-line" data-testid="chartline">
			<span className="chart-line-text">{text}</span>
			<div className="chart-line-empty-line">
				<div className="chart-line-fill" style={{ width: `${width}%`, marginLeft: `${paddingBefore}%` }}>
					{value}
				</div>
			</div>
		</div>
	);
};

export default ChartLine;
