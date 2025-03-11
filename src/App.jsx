import NavBar from './components/NavBar.jsx';
import Favorites from './pages/Favorites.jsx';
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom';
import "./css/App.css"
import { MovieProvider } from './contexts/MovieContext.jsx';

function App() {
  return (
    <MovieProvider>
      <NavBar></NavBar>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </main>

    </MovieProvider>
  );
}

export default App
