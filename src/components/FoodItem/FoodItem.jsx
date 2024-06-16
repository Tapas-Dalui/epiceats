import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

function FoodItem({ id, name, price, description, image }) {



    const { cartItems,
        setCartItems,
        addToCart,
        removFromCart } = useContext(StoreContext)
        return (
        <>
            <div className="food-item">
                <div className="food-item-image-container">
                    <img className='food-item-image' src={image} alt="" />
                    {

                        <div className='food-item-counter' >
                            <img src={assets.remove_icon_red} onClick={() => removFromCart(id)} />
                            <p>{cartItems[id] ? cartItems[id] : 0}</p>
                            <img src={assets.add_icon_green} onClick={() => addToCart(id)} />
                            
                        </div>
                    }
                </div>
                <div className="food-item-info">
                    <div className="food-item-name-rating">
                        <p>{name}</p>
                        <img src={assets.rating_starts} alt="" />
                    </div>
                    <p className="food-item-desc">{description}</p>
                    <p className="food-item-price">${price}</p>
                </div>
            </div>
        </>
    )
}

export default FoodItem
