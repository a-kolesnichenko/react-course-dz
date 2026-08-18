import { useState, useContext } from 'react';
import { UserContext } from './contexts/User/UserContext.jsx';
import moviesList from './MoviesList.js';
import Header from './components/Header/Header.jsx';
import MovieCard from './components/MovieCard/MovieCard.jsx';
import styles from './App.module.css';
import Search from './components/Search/Search.jsx';
import Button from './components/Button/Button.jsx';
import Paragraph from './components/Paragraph/Paragraph.jsx';
import Menu from './components/Menu/Menu.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';


function App() {
   
  const [searchQuery, setSearchQuery] = useState('');
  const { profile, setProfile } = useContext(UserContext);

  const data = moviesList;  
  
  function handleLogin(name) {
	console.log('Пользователь вошел в профиль');
	const profileData = {name: name, isLogined: true};
	setProfile(profileData);
  }

  function handleLogout() {
	const nullProfile = {name: null, isLogined: false};
	setProfile(nullProfile);
  }
  
  return (	
	<div className={styles['app']}>
		<Menu profile={profile} handleLogout={handleLogout}/>
		<Header>Поиск</Header>
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
		<Header>Вход</Header>
		<LoginForm onLogin={handleLogin} profile={profile}/>
	</div>	
  );
}

export default App;
