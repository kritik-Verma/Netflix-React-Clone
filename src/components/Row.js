import React, { useEffect, useState } from "react";
import "./css/Row.css";
import axios from "../axios";
import RowCard from "./RowCard/RowCard";

function Row(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData(params) {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchUrl]);

  return (
    <>
      <div className="row">
        <h2 className="row__movieName">{props.title}</h2>
        <div className="row__posters">
          {movies.map((movie, idx) => {
            if (
              (props.isLargeRow && movie.poster_path) ||
              (!props.isLargeRow && movie.backdrop_path)
            ) {
              return <RowCard kry={idx} prop={props} movie={movie} />;
            } else {
              return "";
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Row;
