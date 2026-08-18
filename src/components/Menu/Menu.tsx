import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { UserContext, InitialContext } from '../../contexts/User/UserContext.tsx';

function Menu() {

    const { profile, setProfile } = useContext(UserContext);
    const {name, isLogined} = profile;    

    function handleLogout() {
        setProfile(InitialContext.profile);
    }

	return (
		<div className={styles['menu']}>
            <div className={styles['menu-links']}>
                <a className={cn(styles['menu-link'], styles['active-link'])} href="#">Поиск фильмов</a>
                <a className={styles['menu-link']} href="#">Мои фильмы</a>                
            </div>
            <div className={styles['menu-user']}>
                {isLogined && <a className={styles['menu-link']}>{name}</a>}
                {isLogined && <a className={styles['menu-link']} onClick={handleLogout}>Выйти</a>}
                {!isLogined && <a className={styles['menu-link']}>Войти</a>}
            </div>
            
        </div>
	);
}

export default Menu;