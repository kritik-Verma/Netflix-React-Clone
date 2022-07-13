import React from "react";
import { Link } from "react-router-dom";
import "./RowCard.css";

function RowCard(props) {
  const { prop, movie } = props;
  const base_url = "https://image.tmdb.org/t/p/original";
  const Style = {
    backgroundSize: "cover",
    backgroundImage: `url(${base_url}${
      prop.isLargeRow ? movie.poster_path : movie.backdrop_path
    })`,
    backgroundPosition: "center center",
  };
  return (
    <Link
      to={
        prop.isLargeRow
          ? `/trailerScreen/${movie.id}`
          : `/trailerMovie/${movie.id}`
      }
      key={movie.id}
    >
      <div
        className={`row__poster ${prop.isLargeRow && "row__posterLarge"}`}
        style={Style}
      >
        <div className="row__content">
          <div
            className={
              prop.isLargeRow ? "row_content-box-large" : "row_content-box"
            }
          >
            <h1 className="content__title">{movie?.title || movie?.name}</h1>
            <p className="content__description">
              {movie.overview?.length > 90
                ? movie.overview.substr(0, 90 - 1) + "..."
                : movie.overview}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RowCard;
