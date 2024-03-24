import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTION
    );
    const json = await response.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovie();
    // eslint-disable-next-line
  }, []);
};
