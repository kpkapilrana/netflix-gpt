import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTION
    );
    const json = await response.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovie();
    // eslint-disable-next-line
  }, []);
};
