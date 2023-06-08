import React from 'react';
import { useCart } from 'react-use-cart'

function ProductCard({ imgSrc, name, price, itemId, item }) {

   const { addItem } = useCart();

   return (
      <div className="productCardItem" id={itemId}>
         <div className="imgItem">
            <img src={imgSrc} alt="" />
         </div>
         <div className="productCardData">
            <h3 className="nameItem">{name}</h3>
            <h3 className="priceItem">{price} <span>UAH</span></h3>
         </div>
         <button className="addBtn"
            onClick={() => addItem(item)} >
            Add to Cart
         </button>
      </div>
   )
}

export default ProductCard
