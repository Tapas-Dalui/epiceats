import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu({ category, setCategory }) {
    return (
        <>
            <div className="explore-menu" id='explore-menu'>
                <h1>Explore Our Menu</h1>
                <p className='explore-menu-text'>
                    Our food menu offers a delightful journey through a diverse selection of dishes, each crafted with the finest ingredients and a passion for flavor. From savory starters to decadent desserts, every item is designed to satisfy your cravings and create a memorable dining experience.
                </p>
                <div className="explore-menu-list">
                    {menu_list.map((item, index) => {
                        return (
                            <div onClick={() => setCategory(item.menu_name)} key={index} className="explore-menu-list-item">
                                <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt="" />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })}
                </div>
                <hr />
            </div>
        </>
    )
}

export default ExploreMenu
