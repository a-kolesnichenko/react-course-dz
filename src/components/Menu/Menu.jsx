import styles from './Menu.module.css';
import cn from 'classnames';

function Menu({userName, isLogined, handleLogout}) {

	return (
		<div className={styles['menu']}>
            <div className={styles['menu-links']}>
                <a className={cn(styles['menu-link'], styles['active-link'])} href="#">Поиск фильмов</a>
                <a className={styles['menu-link']} href="#">Мои фильмы</a>                
            </div>
            <div className={styles['menu-user']}>
                {isLogined && <a className={styles['menu-link']}>{userName}</a>}
                {isLogined && <a className={styles['menu-link']} onClick={handleLogout}>Выйти</a>}
                {!isLogined && <a className={styles['menu-link']}>Войти</a>}
            </div>
            
        </div>
	);
}

export default Menu;