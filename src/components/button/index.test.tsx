import { render, screen } from '@testing-library/react';
import Button from '.';

test('Check button render', () => {
	render(<Button onClick={() => {}}>Text</Button>);
	const buttonElement = screen.getByText(/Text/i);
	expect(buttonElement).toBeInTheDocument();
	expect(buttonElement).toHaveClass('button');
});
