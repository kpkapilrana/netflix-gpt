import React from "react";
import { IMAGE_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 hover:w-60">
      <img alt="Movie" src={IMAGE_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
