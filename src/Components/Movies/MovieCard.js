import React from "react";
import "./MovieCard.css";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const MovieCard = ({ movie, handleName }) => {
  return (
    <>
      {/* Movie List */}
      <div className="movie-card">
        <div className="container" onClick={() => handleName(movie.name)}>
          <a href="cover">
            <img src={movie.image} alt="cover" className="cover" />
          </a>
          <div
            className="hero"
            style={{
              backgroundImage: `url(${movie.image})`,
              backgroundPosition: "center right",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: "transparent",
              opacity: 0.5,
            }}
          >
            <div className="details">
              <div className="title1">
                <span>{movie.name}</span>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography component="legend"></Typography>
                  <Rating
                    name="read-only"
                    value={movie.rating}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    style={{ color: "red" }}
                  />
                </Box>
              </div>
            </div>{" "}
            {/* end details */}
          </div>{" "}
          {/* end hero */}
          <div className="description">
            <span>{movie.date}</span>
            <div className="column1">
              <span className="tag"> {movie.type}</span>
            </div>{" "}
            {/* end column1 */}
            <div className="column2">
              <p>
                {movie.description}... <a href="description">read more</a>
              </p>
              <div className="avatars">
                <a href="person 1" data-tooltip="Person 1" data-placement="top">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png"
                    alt="avatar1"
                  />
                </a>
                <a href="person 2" data-tooltip="Person 2" data-placement="top">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png"
                    alt="avatar2"
                  />
                </a>
                <a href="person 3" data-tooltip="Person 3" data-placement="top">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png"
                    alt="avatar3"
                  />
                </a>
              </div>{" "}
              {/* end avatars */}
            </div>{" "}
            {/* end column2 */}
          </div>{" "}
          {/* end description */}
        </div>{" "}
        {/* end container */}
      </div>{" "}
      {/* end movie-card */}
    </>
  );
};

export default MovieCard;
