import React from "react";
import Rating from "@material-ui/lab/Rating";

export default function SearchByRating({ handleRating, rating }) {
  return (
    <Rating
      name="read-only"
      controlled="true"
      value={rating}
      onChange={handleRating}
    />
  );
}
