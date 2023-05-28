import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HeaderNav from './components/header/header';
import Favorites from './components/favouratesactions/favourates';
import NewReleases from './components/NewRelease/newrelease';
import MainMovieSection from './components/body/mainmovieSection/mainmoviesection';
import MovieRoller from './components/body/movieRoller/movieRolller';
import MovieDetails from './components/moviesdetails/moviesDetails';
import NotFound from './components/notfound/notfound';
import React, { useState } from 'react';


function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="myDiv bg-dark vh-100">
      <HeaderNav onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchQuery} />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/newrelease" element={<NewReleases />} />
        <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function Home({ searchTerm }) {
  return (
    <div className='bg-dark'>
      <MainMovieSection />
      <MovieRoller searchTerm={searchTerm} />
      
    </div>
  );
}

export default App;
