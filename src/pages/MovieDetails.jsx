import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { convertminutes } from "../utils/utils";
import backup from "../assets/noImg.webp";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
  const img = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : backup;

  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setMovie(jsonData));
    }
    fetchMovies();
  });
  useEffect(() => {
    document.title = `${movie.title}`;
  });

  return (
    <main className="container mb-5">
      <h5 className="text-white py-2 border-bottom mb-3">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={img} alt="" className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-8">
          <h3 className="text-primary">{movie.title}</h3>
          <p className="mt-3">{movie.overview}</p>

          {movie.genres ? (
            <p className="d-flex gap-3">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="badge bg-danger">{genre.name}</span>
              ))}
            </p>
          ) : (
            ""
          )}
          <p className="mt-2">
            <i className="bi bi-star-fill text-warning"/> {movie.vote_average} | 
            <i className="bi bi-people-fill text-success"/> {movie.vote_average} reviews
          </p>
          <table className="table table-bordered w-50 mt-2">
            <tbody>
              <tr>
                <th>Runtime</th>
                <td>{convertminutes(movie.runtime)}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>{movie.budget}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>{movie.revenue}</td>
              </tr>
              <tr>
                <th>Release Data</th>
                <td>{movie.release_date}</td>
              </tr>
              <a className="btn btn-warning mt-3" target='_blank' href={`https://www.imdb.com/title/${movie.imdb_id}`} > View in IMDB</a>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
