import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore the world of irresistible flavors!</h1>
        <p className='explore-menu-text'>
       "Discover a delightful variety of savory and crispy Namkeen snacks that bring flavor, crunch, and joy to every moment of your day!"</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu
