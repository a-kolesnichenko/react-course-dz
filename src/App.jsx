import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import MovieCard from './components/MovieCard/MovieCard.jsx';
import styles from './App.module.css';
import Search from './components/Search/Search.jsx';
import Button from './components/Button/Button.jsx';
import Paragraph from './components/Paragraph/Paragraph.jsx';
import Menu from './components/Menu/Menu.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import { useLocalStorage } from './hooks/use-localstorage.hook.js';

function App() {
  	const data = [
		{
			posterSrc: '/black_widow.png',
			title: 'Black Widow',
			rating: 324
		},
    		{
			posterSrc: '/shang_chi.png',
			title: 'Shang-Chi',
			rating: 124
		},
    		{
			posterSrc: '/loki.png',
			title: 'Loki',
			rating: 235
		},
    		{
			posterSrc: '/how_i_met_mother.png',
			title: 'How I Met Your Mother',
			rating: 123
		},
    {
			posterSrc: '/money_heist.png',
			title: 'Money Heist',
			rating: 8125
		}
	];

  const [searchQuery, setSearchQuery] = useState('');

  const [_, setLocalStorageProfile] = useLocalStorage('profile');

  const [profile, setProfile] = useState({userName: null, isLogined: false});

  function handleLogin(profileData) {
	console.log('Пользователь вошел в профиль');
	setProfile(profileData);
  }

  function handleLogout() {
	const nullProfile = {userName: null, isLogined: false};
	setProfile(nullProfile);	
	setLocalStorageProfile(nullProfile);
  }
  
  return (
    <div className={styles['app']}>
     <Menu userName={profile.userName} isLogined={profile.isLogined} handleLogout={handleLogout}/>
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
