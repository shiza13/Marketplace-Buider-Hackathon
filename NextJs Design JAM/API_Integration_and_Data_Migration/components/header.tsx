import React from 'react';

import Link from "next/link";
import { styleText } from "util";
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Header(){
    return(
        <header className="header">
  <div className="header-container">
   
    <div className="search">
      <button className="search-button">
        <IoMdSearch  className="search-icon"/>
      </button>
    </div>

   
    
      <div className="avion-text">
      <Link href="/">Avion</Link>   
  
      </div>

   
   

   
  {/* {/* <div className="cart-user">
      <button className="cart-button">
      <IoCartOutline className="cart-icon"/>
      
      </button>
      <button className="user-button">
      <FaRegCircleUser className="user-icon"/>
      </button>
    </div> */}
    <div  className="cart-user-icon">
    </div><Link href="/shopping-baskets"><IoCartOutline/></Link>
    <Link href="/about"><FaRegCircleUser/></Link>
    </div>
 
  
  
    <hr className="my-6 border-gray-600" />
  
  <nav className="nav">
    <ul className="nav-links">
      
      <li><Link href="/plant-pots">Plant pots</Link></li>
      <li><Link href="ceramics">Ceramics</Link></li>
      <li><Link href="/tables">Tables</Link></li>
      <li><Link href="/chairs">Chairs</Link></li>
      <li><Link href="/crockery">Crockery</Link></li>
      <li><Link href="/tableware">Tableware</Link></li>
      <li><Link href="/cutlery">Cutlery</Link></li>
      
    </ul>
  </nav>
</header>

            
           
   

    )
}