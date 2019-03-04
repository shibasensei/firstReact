import React from 'react';

const SearchBox = ({searchChange}) => {
  return(
    <div className='pa2'>
      <input
        className='pa3 ba b--orange bg-white'
        type='search'
        placeholder='search robbiga'
        onChange = {searchChange}
      />
    </div>
  );
}

export default SearchBox;
