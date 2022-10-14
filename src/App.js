import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Screans/Home/Home';
// import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;