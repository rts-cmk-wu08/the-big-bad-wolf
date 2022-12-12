import { Link } from "react-router-dom";
import "./Dropdown.scss";
import { useState, useEffect,useRef } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
            <li className="dropdown-menu__item"><Link to={"/shop?type=cd-players"}>  CD Players</Link></li>
            <li className="dropdown-menu__item"><Link to={"/shop?type=dvd-players"}>DVD Players</Link></li>
            <li className="dropdown-menu__item"><Link to={"/shop?type=preamps"}>Preamps</Link></li>
            <li className="dropdown-menu__item"><Link to={"/shop?type=speakers"}>Speakers</Link></li>
            <li className="dropdown-menu__item"><Link to={"/shop?type=turntabels"}>Turntabels</Link></li>
            <li className="dropdown-menu__item"><Link to={"/shop?type=integrated-amplifiers"}>Integrated Amplifiers</Link></li>
            <li className="dropdown-menu__item"><Link to={"/shop?type=power-amplifiers"}>Power Amplifiers</Link></li>
            <li className="dropdown-menu__item"><Link to={"/shop?type=tube-amplifiers"}>Tube Amplifiers</Link></li>
          </ul>
          
          </div>

          
          )}

          </>
       );
  }


 
export default Dropdown;