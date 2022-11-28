import { Link } from "react-router-dom";
import "./Header.scss";


const Header = () => {

    return (

        <header>

            

            <nav>

            <Link to={"/"}><img src="/logo_sml.png" alt="Logo" /></Link>

               
z
        
         <ul className="nav__menu">
               <li> <Link to={"/shop"}>SHOP</Link> </li>
                <li> <Link to={"/about"}>ABOUT US</Link> </li>
                <li><Link to={"/contact"}>CONTACT</Link></li>
                </ul>
        
              
            

           
          
          
   

    
                <form className="search-form">
                    <input className="search-form__input" type="text" placeholder="Search product..." name="search"/>
                    <button className="search-form__button" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                    

<div className="header__icons">
    <Link to={"/#"}><i class="fa-solid fa-user"></i></Link>
    <Link to={"/cart"}><i class="fa-solid fa-cart-shopping"></i> </Link>

</div>


 

    
    </nav>

        </header>

     );

}

export default Header;