import React from 'react';
import { Link } from 'react-router-dom';

export const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <div className='mt-5 col-sm-3'>
      <div className='card ' style={{ width: '18rem' }}>
        <img className='card-img-top' src={image} alt={image} />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <h5>{glass}</h5>
          <p className='card-text'>{info}</p>
          <Link to='/' className='btn btn-primary'>
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};
