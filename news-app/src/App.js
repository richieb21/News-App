import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import GetNews from './components/GetNews';
import Breaking from './components/Breaking';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<h1>Hi</h1>}/>
          <Route path='/breaking' element={<Breaking/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
