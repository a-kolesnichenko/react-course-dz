import { useState } from 'react';
import moviesList from '../../MoviesList';
import Header from '../../components/Header/Header.tsx';
import MovieCard from '../../components/MovieCard/MovieCard.tsx';
import styles from './MoviesSearch.module.css';
import Search from '../../components/Search/Search.tsx';
import Button from '../../components/Button/Button.tsx';
import Paragraph from '../../components/Paragraph/Paragraph.tsx';


function MoviesSearch() {
   
  const [searchQuery, setSearchQuery] = useState('');
  const data = moviesList; 
  
  return (	
    <>      
      <Header text="Поиск"/>
      <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
      <div className={styles['search-button-container']}>
        <Search placeholder="Введите название" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <Button onClick={() => console.log('Искать')}>Искать</Button>      
      </div>  
      <div className={styles['movie-cards-container']}>
        {data.map(movie => (
          <MovieCard 
            key={movie.title}
            posterSrc={movie.posterSrc}
            title={movie.title}
            rating={movie.rating}
          />
        ))}  
      </div>   
    </>
  );
}

export default MoviesSearch;
