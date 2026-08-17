import './Search.css';

function Search({placeholder, value, onChange}) {

	return (
        <div className='search-container'>   
          <img className="search-icon" src='/search_icon.svg' alt='Поиск'/>
		  <input className='search-custom' placeholder={placeholder} value={value} onChange={onChange} />
        </div>
	);
}

export default Search;