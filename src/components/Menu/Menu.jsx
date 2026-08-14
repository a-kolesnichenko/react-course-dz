import './Menu.css';

function Menu() {

	return (
		<div>
            <div className='menu-links'>
                <a className="menu-link active-link" href="#">Поиск фильмов</a>
                <a className="menu-link" href="#">Мои фильмы</a>                
            </div>
        </div>
	);
}

export default Menu;