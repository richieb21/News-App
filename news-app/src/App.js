import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import GetNews from './components/GetNews';
import Breaking from './components/Breaking';
import Sports from './components/Sports';
import LandingPage from './components/LandingPage';
import Company from './components/Company';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/breaking' element={<Breaking/>}/>
          <Route path='/sports' element={<Sports/>}/>
          <Route path='/company' element={<Company/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
