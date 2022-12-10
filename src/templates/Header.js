import { Link } from "react-router-dom";
import "./Header.scss";
import SearchWidget from "../components/SearchWidget";
import CartWidget from "../components/CartWidget/CartWidget";

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
                      <SearchWidget />
                    </div>
                    <ul className="header-icons">
                        <li><Link to={"/login"} className="header-icons__link"><i className="fa-solid fa-user"></i></Link></li>
                        <li><CartWidget /></li>
                    </ul>
                </div>
            </div>
        </header>

     );

}

export default Header;