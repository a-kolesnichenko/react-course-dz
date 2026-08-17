import styles from './Button.module.css';

function Button({children, onClick}) {

	return (
		<button className={styles['button-custom']} onClick={onClick}>{children}</button>
	);
}

export default Button;