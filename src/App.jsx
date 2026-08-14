import Header from './components/Header/Header.jsx';
import './App.css';
import Search from './components/Search/Search.jsx';
import Button from './components/Button/Button.jsx';
import Paragraph from './components/Paragraph/Paragraph.jsx';
import Menu from './components/Menu/Menu.jsx';

function App() {
  
  return (
    <div className="app">
     <Menu/>
     <Header>Поиск</Header>
     <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
     <div className='search-button-container'>
      <Search placeholder="Введите название" />
      <Button onClick={() => console.log('Искать')}>Искать</Button>
     </div>   
    </div>
  );
}

export default App;
