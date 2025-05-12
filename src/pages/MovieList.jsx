import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import img from "../assets/wallpaperflare.com_wallpaper.jpg";
import Slider from "react-slick";

function MovieList({ title, apiPath }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };
  
  const { data: movies } = useFetch(apiPath);
  
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <div>
        <main>
          {title == "Your Guide To Great Movies" ? (
            <div
  className="bg-image"
  style={{
    backgroundImage: `url('${img}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "calc(100vh - 56px)",
    marginTop: "0"
  }}
>
              <div className="container py-5 ">
                <div>
                  <h1 className="text-primary animate__animated animate__fadeInDown">
                    Welcome To MovieHunt
                  </h1>
                  <h4 className="lead animate__animated animate__fadeInUp animate__delay-1s">
                    Discover movies you'll love with personalized
                    suggestions, curated collection, and quick searches - your
                    guide to finding great films.
                  </h4>
                  <div className="mt-5">
                    <Slider {...settings} className="px-2">
                      {movies.map((movie) => (
                        <div key={movie.id} className="px-2">
                          <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
                            alt={movie.title}
                            className="img-fluid rounded"
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                          <h6 className="text-white mt-2">{movie.title}</h6>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <Link to="/movies/upcoming">
                    <button className="btn btn-primary mt-3 btn-animate">
                      Explore Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <h5 className="py-3 my-5 border-bottom text-right text-danger container">
            {title}
          </h5>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3 py-2 container m-auto">
            {movies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default MovieList;