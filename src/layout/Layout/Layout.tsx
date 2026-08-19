import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Menu from '../../components/Menu/Menu.tsx';

function Layout() {
  return (
    <div className={styles['layout']}>    
      <div className={styles['menu']}>
        <Menu />
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;