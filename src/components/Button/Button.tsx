import styles from './Button.module.css';
import type { ButtonProps } from './Button.props';

function Button({ children,  ...props }: ButtonProps) {

	return (
		<button className={styles['button-custom']} {...props}>{children}</button>
	);
}

export default Button;