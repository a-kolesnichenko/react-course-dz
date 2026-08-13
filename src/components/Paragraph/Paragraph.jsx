import './Paragraph.css';

function Paragraph({children}) {

	return (
		<p className='paragraph-custom'>{children}</p>
	);
}

export default Paragraph;