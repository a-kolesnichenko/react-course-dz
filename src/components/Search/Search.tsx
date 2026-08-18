import { type SearchProps } from './Search.props';
import styles from './Search.module.css';

function Search({ placeholder, value, onChange }: SearchProps) {

	return (
        <div className={styles['search-container']}>
          <img className={styles['search-icon']} src='/search_icon.svg' alt='Поиск'/>
	  <input className={styles['search-custom']} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
	);
}

export default Search;
