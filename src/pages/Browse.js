import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      <div>
        {/* {movies && movies.length} */}
        <div className="flex flex-wrap">
          {movies &&
            movies.map((movie) => {
              return (
                <div key={movie.id}>
                  <h2> {movie.title}</h2>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
