import './Header.css';

function Header({children}) {

	return (
		<h1 className='h1-custom'>{children}</h1>
	);
}

export default Header;