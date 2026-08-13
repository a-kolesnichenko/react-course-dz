import './Button.css';

function Button({children}) {

	return (
		<button className='button-custom'>{children}</button>
	);
}

export default Button;