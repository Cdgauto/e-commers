import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ItemCount from './components/ItemCount/ItemCount';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <NavBar />
      <ItemListContainer greeting={'Hola a todos'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}/>
    </div>
  );
};

export default App;
