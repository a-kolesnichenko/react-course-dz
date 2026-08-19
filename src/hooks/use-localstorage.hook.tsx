import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
	const [data, setData] = useState<T>(initialValue);

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key) ?? 'null');
		if (res) {
			setData(() => res);
		}
	},[key]);

	const saveData = (newData: T) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData] as const;
}