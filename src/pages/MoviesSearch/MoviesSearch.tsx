import { useState } from 'react';
import Header from '../../components/Header/Header.tsx';
import MovieCard from '../../components/MovieCard/MovieCard.tsx';
import styles from './MoviesSearch.module.css';
import Search from '../../components/Search/Search.tsx';
import Button from '../../components/Button/Button.tsx';
import Paragraph from '../../components/Paragraph/Paragraph.tsx';
import { API_URL, API_KEY } from '../../helpers/API.ts';
import type { Movie } from '../../interfaces/Movie.ts';
import type { MoviesSearchResponse } from '../../interfaces/MoviesSearchResponse.ts';
import axios from 'axios';


function MoviesSearch() {
   
  const [searchQuery, setSearchQuery] = useState('');
  
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {

      const { data } = await axios.get<MoviesSearchResponse>(`${API_URL}?s=${searchQuery}&apikey=${API_KEY}`);
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (e) {
      console.error(e);
      return;
    }
  };
  
  return (	
    <>      
      <Header text="Поиск"/>
      <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
      <div className={styles['search-button-container']}>
        <Search placeholder="Введите название" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <Button onClick={getMovies}>Искать</Button>
      </div>  
      {movies.length > 0 && <div className={styles['movie-cards-container']}>
        {movies.map(movie => (
          <MovieCard 
            key={movie.imdbID}
            imdbID={movie.imdbID}
            posterSrc={movie.Poster}
            title={movie.Title}
            year={movie.Year} />
        ))}  
      </div>}
      {movies.length === 0 && <div className={styles['movies-no-results-container']}>
        <Header text="Упс... ничего не найдено"/>
        <Paragraph>Попробуйте изменить запрос или ввести более точное название фильма</Paragraph>
      </div>}
    </>
  );
}

export default MoviesSearch;
