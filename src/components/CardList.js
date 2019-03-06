import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  const cardComponent = robots.map((user,x) =>{
    return (<Card
      key={x} id={robots[x].id}
      name={robots[x].name}
      email={robots[x].email}
    />)
  });
  return(
      <div>
        {cardComponent}
      </div>
  );
}

export default CardList;
