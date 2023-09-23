import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

function App() {
  return (
    <div className="App"> 
      <NavBar />
      <ItemListContainer greeting={'Hola a todos'}/>
    </div>
  );
};

export default App;
