import { Link } from "react-router-dom";
import "./Header.scss";
import Search from "../components/Search";


const Header = () => {

    return (

        <header className="top-navigation">
            <div className="container">
            
                <div className="top-navigation__main">
                    <div className="main-logo">
                        <Link to={"/"}><img src="/logo_sml.png" alt="Logo" /></Link>
                    </div>
                    <nav className="main-nav">
                        <ul className="main-menu">
                            <li className="main-menu__item"><Link to={"/shop"}>Shop</Link></li>
                            <li className="main-menu__item"><Link to={"/about"}>About Us</Link></li>
                            <li className="main-menu__item"><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="top-navigation__right">
                    <div className="header-search">
                      <Search />
                    </div>
                    <ul className="header-icons">
                        <li><Link to={"/login"} className="header-icons__link"><i className="fa-solid fa-user"></i></Link></li>
                        <li><Link to={"/cart"} className="header-icons__link"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                    </ul>
                </div>
            </div>
        </header>

     );

}

export default Header;