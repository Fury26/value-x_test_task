import React from 'react';
import './index.css';

type Props = {
	children: React.ReactNode;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className="button">
			{children}
		</button>
	);
};

export default Button;
