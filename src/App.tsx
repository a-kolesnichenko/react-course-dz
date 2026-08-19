import { useState } from 'react';
import moviesList from './MoviesList';
import Header from './components/Header/Header.tsx';
import MovieCard from './components/MovieCard/MovieCard.tsx';
import styles from './App.module.css';
import Search from './components/Search/Search.tsx';
import Button from './components/Button/Button.tsx';
import Paragraph from './components/Paragraph/Paragraph.tsx';
import Menu from './components/Menu/Menu.tsx';
import LoginForm from './components/LoginForm/LoginForm.tsx';


function App() {
   
  const [searchQuery, setSearchQuery] = useState('');
  const data = moviesList; 
  
  return (	
    <div className={styles['app']}>
      <Menu />
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
      <Header text="Вход"/>
      <LoginForm  />
    </div>	
  );
}

export default App;
