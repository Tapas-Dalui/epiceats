import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
     <div className="header">
        <div className="header-contents">
            <h2> Order your favourite <span>food</span> here</h2>
            <p>
                Epiceates is an innovative online cloud kitchen delivering gourmet meals right to your doorstep. With a focus on quality and convenience, our expertly crafted dishes cater to diverse tastes and dietary preferences, ensuring a restaurant-quality dining experience in the comfort of your home. Enjoy the ease of ordering and the joy of savoring exceptional cuisine with Epiceates.  
            </p>
            <button>View Menu</button>
        </div>
     </div>
    </>
  )
}

export default Header
