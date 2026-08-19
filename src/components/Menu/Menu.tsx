import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { UserContext, InitialContext } from '../../contexts/User/UserContext.tsx';
import { NavLink } from 'react-router-dom';

function Menu() {

  const { profile, setProfile } = useContext(UserContext);
  const {name, isLogined} = profile;    

  function handleLogout() {
    setProfile(InitialContext.profile);
  }

  return (
    <div className={styles['menu']}>
      <div className={styles['menu-links']}>
        <NavLink to="/" className={({ isActive }) => cn(styles['menu-link'], {[styles['active-link']]: isActive	})}>Поиск фильмов</NavLink>
        <NavLink to="/favorites" className={({ isActive }) => cn(styles['menu-link'], {[styles['active-link']]: isActive	})} >Мои фильмы</NavLink>
      </div>
      <div className={styles['menu-user']}>
        {isLogined && <NavLink to="/login" className={({ isActive }) => cn(styles['menu-link'], {[styles['active-link']]: isActive	})}>{name}</NavLink>}
        {isLogined && <NavLink to="/" className={({ isActive }) => cn(styles['menu-link'], {[styles['active-link']]: isActive	})} onClick={handleLogout}>Выйти</NavLink>}
        {!isLogined && <NavLink to="/login" className={({ isActive }) => cn(styles['menu-link'], {[styles['active-link']]: isActive	})}>Войти</NavLink>}
      </div>            
    </div>
  );
}

export default Menu;