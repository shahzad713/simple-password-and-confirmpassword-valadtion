import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Foms/Form';
import { BrowserRouter ,  Routes,Route,} from 'react-router-dom';
import Redux from './components/ReduxContant/Redux';
import Home from './components/Home/Home'

function App() {
  return (
    <div >
        <BrowserRouter>
        <NavBar />
      <Routes>
        <Route exact path="/" element={<Form />}/>
        <Route exact path="/redux" element={<Redux />}/>
        <Route exact path="/home" element={<Home />}/>


          
      
      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
