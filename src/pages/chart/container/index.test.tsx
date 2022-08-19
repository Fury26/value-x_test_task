import { render, screen } from '@testing-library/react';
import Chart from '.';

const DATA = [
	{ name: 'Landing Page', time: 7.4 },
	{ name: 'Configurator', time: 0.2 },
	{ name: 'Check-out', time: 7.0 },
	{ name: 'Deal', time: 3.8 },
];

test('Check Chart', () => {
	render(<Chart initData={DATA} />);
	const chartRows = screen.getAllByTestId('chartline');
	expect(chartRows.length).toBe(4);

	const rowElement = screen.getByText(/7.4/i);
	expect(rowElement).toBeInTheDocument();
	const widthNoPercent = +rowElement.style.width.substring(0, rowElement.style.width.length - 2);
	expect(widthNoPercent).toBeCloseTo((7.4 / (7.4 + 0.2 + 7.0 + 3.8)) * 100, 2);
	expect(rowElement.style.marginLeft).toBe('0%');
});
