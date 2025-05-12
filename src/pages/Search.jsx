import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import noResultImage from "../assets/original.webp";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `Search results for "${queryTerm}"`;
  }, [queryTerm]);

  return (
    <main className="container text-center">
      <h5 className="text-danger py-2 border-bottom">
        {movies.length === 0
          ? `No Result Found For "${queryTerm}"`
          : `Result For "${queryTerm}"`}
      </h5>

      {movies.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img
            src={noResultImage}
            alt="No results"
            className="img-fluid my-4"
            style={{ maxWidth: "400px", height: "auto" }}
          />
          <p className="text-danger">Try a different search term.</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3 py-2">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Search;
