import styles from './Menu.module.css';
import cn from 'classnames';

function Menu() {

	return (
		<div>
            <div className={styles['menu-links']}>
                <a className={cn(styles['menu-link'], styles['active-link'])} href="#">Поиск фильмов</a>
                <a className={styles['menu-link']} href="#">Мои фильмы</a>                
            </div>
        </div>
	);
}

export default Menu;