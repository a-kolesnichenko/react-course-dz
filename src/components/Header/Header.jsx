import styles from './Header.module.css';

function Header({children}) {

	return (
		<h1 className={styles['h1-custom']}>{children}</h1>
	);
}

export default Header;