import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = ({ onChange }) => {
  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  const handleHover = (value) => {
    setHoverValue(value);
  };

  const handleClick = (value) => {
    setRating(value);
    onChange(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        const filled = starValue <= rating || starValue <= hoverValue;
        const selected = starValue <= rating;

        return (
          <FaStar
            key={index}
            className={
              starValue <= (hoverValue || rating) ? "star selected" : "star"
            }
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleHover(starValue)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
