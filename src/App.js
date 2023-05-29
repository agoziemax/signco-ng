import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import Head from './components/Head';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className='App'>

      <Head/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
