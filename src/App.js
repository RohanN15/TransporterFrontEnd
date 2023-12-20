import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RouteFinder from './components/RouteFinder';
import MainPage from './components/MainPage.js';
import NavBar from './components/Navbar';
import SearchHistory from './components/SearchHistory';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<MainPage/>} />
        <Route path="RouteFinder" element={<RouteFinder/>} />
        <Route path="SearchHistory" element={<SearchHistory/>}/>
      </Routes>
    </Router>
  );
}

export default App;
