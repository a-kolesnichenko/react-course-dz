import type { HeaderProps } from './Header.props';
import styles from './Header.module.css';

function Header({ text }: HeaderProps) {
	return (
		<h1 className={styles['h1-custom']}>{text}</h1>
	);
}

export default Header;
