import './Search.css';

function Search({placeholder}) {

	return (
        <div className='search-container'>   
          <img className="search-icon" src='/search_icon.svg' alt='Поиск'/>
		  <input className='search-custom' placeholder={placeholder} />
        </div>
	);
}

export default Search;