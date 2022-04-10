import React from 'react';
import { Link } from 'react-router-dom';
export default function Error() {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>404 NOT FOUND</h1>
        <Link to='/' className='btn btn-primary'>
          BACK TO HOME
        </Link>
      </div>
    </section>
  );
}
