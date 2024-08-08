import React from 'react';
import { MdStar } from 'react-icons/md';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="ratings">
      <div className='star-rating'>
        {[...Array(totalStars)].map((_, index) => (
          <MdStar
            key={`star-${index}`}
            color={index < rating ? '#808080' : '#d3d3d3'}
          />
        ))}
      </div>
      <div className="rating-info">
        <span>5/5</span>
        <div className="s__divider"></div>
        <span className='rating-info-text'>136339 ratings & 11381 reviews</span>
      </div>
    </div>
  );
}

export default StarRating;
