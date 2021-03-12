import React from 'react';

export default function Rating({ rating, numReviews }) {
  return (
    <div className="rating">
      <span>
        <i
          id="star1"
          className={
            rating >= 1
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        />
      </span>
      <span>
        <i
          id="star2"
          className={
            rating >= 2
              ? 'fa fa-star'
              : rating >= 1.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        />
      </span>
      <span>
        <i
          id="star3"
          className={
            rating >= 3
              ? 'fa fa-star'
              : rating >= 2.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        />
      </span>
      <span>
        <i
          id="star4"
          className={
            rating >= 4
              ? 'fa fa-star'
              : rating >= 3.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        />
      </span>
      <span>
        <i
          id="star5"
          className={
            rating >= 5
              ? 'fa fa-star'
              : rating >= 4.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        />
      </span>
      <span>{`${numReviews} reviews`}</span>
    </div>
  );
}
