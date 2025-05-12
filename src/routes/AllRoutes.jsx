import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieList from '../pages/MovieList'
import MovieDetails from '../pages/MovieDetails'
import Search from '../pages/Search'
import PageNotFound from '../pages/PageNotFound'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MovieList title="Your Guide To Great Movies" apiPath="movie/now_playing" />}/>
      <Route path='movies/popular' element={<MovieList title="Popular Movies" apiPath="movie/popular" />}/>
      <Route path='movies/top' element={<MovieList title="Top Rated" apiPath="movie/top_rated" />}/>
      <Route path='movies/upcoming' element={<MovieList title="Upcoming Movies" apiPath="movie/upcoming" />}/>
      <Route path='movie/:id' element={<MovieDetails/>}/>
      <Route path='search' element={<Search apiPath="search/movie" />}/>
      <Route path='*' element={<PageNotFound apiPath="search/movie" />} title="Page Not Found"/>
    </Routes>
  )
}

export default AllRoutes