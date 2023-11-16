import React,{ useState } from 'react';
import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {

    const [menu,setMenu] = useState("shop");

    // const menuItems = ["Shop", "Men", "Women","Kids"];

  return (
    <div className='Navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            {/* {menuItems.map((item) =>(
                <li key={item} onClick={() => setMenu(item)}>{item}{menu === item ? <hr/> : <></>}</li>
            ))} */}
            <li onClick={() => {setMenu("Shop")}}>Shop{menu==="Shop"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("Men")}}>Men{menu==="Men"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("Women")}}>Women{menu==="Women"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("Kids")}}>Kids{menu==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar