import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { AddRounded, Delete, RemoveRounded } from '@mui/icons-material';
import Modal from '../components/Modal';

export function Cart() {

   const {
      isEmpty,
      items,
      cartTotal,
      updateItemQuantity,
      removeItem,
   } = useCart();

   if (isEmpty) return (
      <div className="addSomeItem">
         <h2>Cart Empty</h2>
         <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
            alt=""
            className="cartEmpty"
         />
      </div>
   )


   const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [address, setAddress] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      const order = {
         fullName,
         email,
         phone,
         address,
         items,
         cartTotal
      };
      fetch('http://localhost:8000/order', {
         method: 'POST',
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(order)
      }).then(() => {
         console.log("New Order Added");
      })
   }

   const [modal, setModal] = useState({
      modalOpen: false,
      modalClose: false
   });


   return (
      <div className="container checkOut">
         <form onSubmit={handleSubmit}>
            <div className="cart">
               <div className="imputContainer">
                     <label>
                        Name:
                        <input
                           onChange={(e) => setFullName(e.target.value)}
                           value={fullName}
                           id="fullName"
                           type="text" 
                           placeholder="Full Name"
                           name="fullName" required
                           />
                     </label>
                     <label>
                        Email:
                        <input
                           onChange={(e) => setEmail(e.target.value)}
                           value={email}
                           id="email"
                           type="email"
                           placeholder="email@email.com"
                           name="email" required
                        />
                     </label>
                     <label>
                        Phone:
                        <input
                           onChange={(e) => setPhone(e.target.value)}
                           value={phone}
                           id="phone"
                           type="tel"
                           placeholder="098-765-4321"
                           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                           name="phone" required
                        />
                     </label>
                     <label>
                        Address:
                        <input
                           onChange={(e) => setAddress(e.target.value)}
                           value={address}
                           id="address"
                           type="text" 
                           placeholder="Lviv, 50 Pekarska street"
                           name="address" required
                        />
                     </label>
               </div>
               <div className="cartContainer">
                  <div>
                     <div>
                        {items.map((item, id) => {
                           return (
                           <div className="cartItem" key={id}>
                              <div className="cartImg">
                                 <img src={item.imgSrc} alt="" />
                              </div>
                              <div className="cartItemData">
                                 <h3 className="name">{item.name}</h3>
                                 <h3 className="price">{item.price} <span>UAH</span></h3>
                                 <div className="quantity">
                                    <RemoveRounded
                                       className="itemRemove"
                                       onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                    />
                                    <span>{item.quantity}</span>
                                    <AddRounded
                                       className="itemAdd"
                                       onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                    />
                                    <Delete
                                       className="removeBtn"
                                       onClick={() => removeItem(item.id)}
                                    />
                                 </div>
                              </div>
                           </div>
                           )
                        })}
                     </div>
                  </div>
                     
               </div>
            </div>
            <div className="submitContainer">
               <h3>Total Price: { cartTotal }<span> UAH</span></h3>
               <button
                  onClick={() => setModal({
                     ...modal, modalOpen: true
                  })}
                  type="submit"
                  className="submitBtn"
               >
                  Submit
               </button>
            </div>
         </form>
         <Modal
            title={"Confirmation"}
            isOpened={modal.modalOpen}
            onModalClose={() => setModal({
               ...modal, modalOpen: false
            })}
         >
            <h4>Thank you for your order</h4>
         </Modal>
      </div>
   )
}


