import React from 'react';

const Card = (props) => {
  const {id, name, email} = props;
  return(
    <div className='tc bg-orange black br3 dib pa2 ma3 grow shadow-5'>
      {/* washed-yellow */}
      <img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
      <div>
        <h2>
          {name}
        </h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
