import styles from './Paragraph.module.css';
import { type ParagraphProps } from './Paragraph.props';

function Paragraph({ children }: ParagraphProps) {
	return (
		<p className={styles['paragraph-custom']}>{children}</p>
	);
}

export default Paragraph;
