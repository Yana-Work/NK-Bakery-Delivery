import React from 'react'

const Modal = props => {

   return (
      <div className={`modal ${props.isOpened ? 'open' : 'close'}`}>
         <div className="modal_body">
            <h3>{props.title}</h3>
            {props.children}
            <button className="modal_btn" onClick={props.onModalClose}>OK</button>
         </div>
      </div>
   )
}

export default Modal
