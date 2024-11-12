import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'


const Placeorder = () => {
    
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
      <p className='title'>Delivery Information</p>
          <div className="multi-field">
              <input type="text" name='firstName'  placeholder='First name' />
              <input type="text" name='lastName'  placeholder='Last name' />
          </div>
          <input type="email" name='email'  placeholder='Email address' />
          <input type="text" name='street' placeholder='Street' />
          <div className="multi-field">
              <input type="text" name='city'  placeholder='City' />
              <input type="text" name='state'  placeholder='State' />
          </div>
          <div className="multi-field">
              <input type="text" name='zipcode' placeholder='Zip code' />
              <input type="text" name='country'  placeholder='Country' />
          </div>
          <input type="text" name='phone'  placeholder='Phone' />


      </div>
      <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
                <div className="cart-total-details"><p>Subtotal</p><p>${getTotalCartAmount()}</p></div>
                <hr />
                <div className="cart-total-details"><p>Delivery Fee</p><p>${getTotalCartAmount() === 0 ? 0 : 5}</p></div>
                <hr />
                <div className="cart-total-details"><b>Total</b><b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</b></div>
            </div>
        </div>
        <div className="payment-options">
            <h2>Select Payment Method</h2>
            <div className="payment-option">
                <img src={assets.selector_icon} alt="" />
                <p>COD ( Cash On Delivery )</p>
                <img src={assets.selector_icon} alt="" />
                <p> Pay with UPI </p>
            </div>
            <button >PROCEED TO PAYMENT</button>
        </div>
      </div>

    </form>
  )
}

export default Placeorder
