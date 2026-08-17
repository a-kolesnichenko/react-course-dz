import styles from './Paragraph.module.css';

function Paragraph({children}) {

	return (
		<p className={styles['paragraph-custom']}>{children}</p>
	);
}

export default Paragraph;