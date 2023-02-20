import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Search from './Components/Search/Search';
import Trending from './Components/Trending/Trending';

function App() {
  return (
    <div className='App'>
      <Router basename='/'>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/search' element={<Search />} />
          <Route path='/trending' element={<Trending />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// https://gnews.io/api/v4/search?q=example&apikey=212ecaad787891599f0e5ab9a97298a8&lang=en&country=us&max=10
