import { render, screen } from '@testing-library/react';
import ChartLine from '.';

test('Check ChartLine', () => {
	render(<ChartLine text="Action" paddingBefore={10} width={50} value={30} />);
	const chartElement = screen.getByTestId('chartline');
	expect(chartElement).toBeInTheDocument();
	expect(chartElement?.childElementCount).toBe(2);

	const rowElement = screen.getByText(/30/i);
	expect(rowElement).toBeInTheDocument();
	expect(rowElement.style.width).toBe('50%');
	expect(rowElement.style.marginLeft).toBe('10%');
});
