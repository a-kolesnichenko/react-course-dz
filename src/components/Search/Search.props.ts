import { ChangeEventHandler } from 'react';

export interface SearchProps {
	placeholder?: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}
