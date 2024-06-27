import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import './Cart.css'

function Cart() {

  const { food_list,
    cartItems,
    setCartItems,
    addToCart,
    removFromCart,
    getTotalCartAmount } = useContext(StoreContext)


  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {
            food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <>
                    <div className="cart-items-title cart-items-item">
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>${item.price * cartItems[item._id]}</p>
                      <p onClick={()=>removFromCart(item._id)} className='cross'>X</p>
                    </div>
                    <hr />
                  </>

                )
              }
            })
          }
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Sub Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivary Fee</p>
                <p>${2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button>Proceed to Checkout</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>Enter your promocode</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='Enter promo code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
