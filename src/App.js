import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Foms/Form';
import { BrowserRouter ,  Routes,Route,} from 'react-router-dom';

function App() {
  return (
    <div >
        <BrowserRouter>
        <NavBar />
      <Routes>
        <Route exact path="/" element={<Form />}/>
          
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
