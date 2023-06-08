import React from 'react';

function ShopCard( {name, isActive} ) {
   return (
      <div className={`shopCardItem ${isActive ? `active` : ``}`}>
         <p>{name}</p>
      </div>
   )
}

export default ShopCard
