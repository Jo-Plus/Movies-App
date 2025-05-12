import React from "react";
import { Link } from "react-router-dom";
import backup from "../assets/noImg.webp";

function Card({movie}) {
  const {poster_path , id , overview , title , vote_average , vote_count} = movie;
  const img = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : backup ;
  return (
    <div className="col">
      <div className="card shadow-sm" title={title}>
        <img src={img} className="card-img-top img" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-primary text-overflow-1">{title}</h5>
          <p className="card-text text-overflow-2">
            {overview}
          </p>
        </div>
        <div className="mb-3 d-flex justify-content-between align-items-center card-body">
          <Link to={`/movie/${id}`} className="btn btn-sm btn-outline-primary stretched-link">
            Read More
          </Link>
          <small>
            <i className="bi bi-star-fill text-warning" />
            {vote_average} | {vote_count} review
          </small>
        </div>
      </div>
    </div>
  );
}

export default Card;
