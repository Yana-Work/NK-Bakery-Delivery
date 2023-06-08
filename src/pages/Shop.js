import React from 'react';
import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";
import { ShopItems, Items } from "../data/Data";
import { useEffect, useState } from 'react';

export function Shop() {

   const [isMainMenu, setMainMenu] = useState(
      Items.filter((element) => element.itemId === "cakes01")
   );

   useEffect(() => {

   const menuCards = document
   .querySelector(".shopCards")
   .querySelectorAll(".shopCardItem");

   function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
   }

   menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
   return () => {
      // remove the event listener
      menuCards.forEach((n) => n.removeEventListener("click", setMenuCardActive));
   };
   }, [isMainMenu]);

   const setData = (itemId) => {
      setMainMenu(Items.filter((element) => element.itemId === itemId))
   }


   return (
      <div className="container shop">
         <div className="shopsContainer">
            <h3>Shops:</h3>
            <div className="shopCards">
               { ShopItems && ShopItems.map(data => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                     <ShopCard
                        name={data.name}
                        isActive={data.id === 1 ? true : false} />   
                  </div>
                  ))
               }
            </div>
         </div>
         <div className="productsContainer">
            { isMainMenu && isMainMenu.map((data) => (
               <ProductCard
                  item={data}
                  key={data.id}
                  itemId={data.id}
                  imgSrc={data.imgSrc}
                  name={data.name}
                  price={data.price}
                  />
               ))
            }
         </div>
      </div>
   )
}
