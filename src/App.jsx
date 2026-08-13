import Header from './components/Header/Header.jsx';
import './App.css';
import Button from './components/Button/Button.jsx';
import Paragraph from './components/Paragraph/Paragraph.jsx';

function App() {
  
  return (
    <>
     <Header>Поиск</Header>
     <Button>Искать</Button>
     <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
    </>
  );
}

export default App;
