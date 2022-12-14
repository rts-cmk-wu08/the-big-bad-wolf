import { Link } from "react-router-dom";
import "./Dropdown.scss";
import { useState, useEffect,useRef } from "react";


const Dropdown = () => {


  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const TypeLink = ({ type, name }) => {
    const to = `/shop/${type}`;
    return <Link to={to}>{name}</Link>;}

  useEffect(() => {
    const handleClickOutside = event => { if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { setIsOpen(false); } };
    document.addEventListener("click", handleClickOutside);
    return () => {
        document.removeEventListener("click", handleClickOutside);
    };
}, [dropdownRef]);

  return (
  
<>
<Link to={"/shop"} className="nav-menu__item" onMouseEnter={() => setIsOpen(true)}> Shop
                </Link>


                {isOpen && (
                  <div ref={dropdownRef} className="dropdown-menu__wrapper">
             <ul  className="dropdown-menu">
            <li className="dropdown-menu__header">Browse Categories</li>
            <li className="dropdown-menu__item"><TypeLink type="cd-players" name="CD Players"/></li>
            <li className="dropdown-menu__item"><TypeLink type="dvd-players" name="DVD Players"/></li>
            <li className="dropdown-menu__item"><TypeLink type="preamps" name="Preamps"/></li>
            <li className="dropdown-menu__item"><TypeLink type="speakers" name="Speakers"/></li>
            <li className="dropdown-menu__item"><TypeLink type="turntabels" name="Turntabels"/></li>
            <li className="dropdown-menu__item"><TypeLink type="integrated-amplifiers" name="Integrated Amplifiers"/></li>
            <li className="dropdown-menu__item"><TypeLink type="power-amplifiers" name="Power Amplifiers"/></li>
            <li className="dropdown-menu__item"><TypeLink type="tube-amplifiers" name="Tube Amplifiers"/></li>
          </ul>
          
          </div>

          
          )}

          </>
       );
  }


 
export default Dropdown;