import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTION
    );
    const json = await response.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovie();
    // eslint-disable-next-line
  }, []);
};
