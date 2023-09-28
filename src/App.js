import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetallContainer/ItemDetailContainer'
import './App.css';

function App() {
  return (
    <div className="App"> 
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemDetailContainer />
    </div>
  );
};

export default App;
