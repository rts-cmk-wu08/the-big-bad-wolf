import { useState } from "react";
import "./Dropdown.scss";

const Dropdown = () => {

    
    
    const [open, setOpen] = useState(false);
 
    return ( 
        <div className="dropdown"> 
        <button 
        
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}>
            
            Shop

        </button>
        
        {open && (
        
            <ul className="dropdown-menu">
                <h3>Browse Categories</h3>
            <li className="dropdown-menu__item" ><button>CD Players</button></li>
            <li className="dropdown-menu__item" ><button>DVD Players</button></li>
            <li className="dropdown-menu__item" ><button>Preamps</button></li>
            <li className="dropdown-menu__item" ><button>Speakers</button></li>
            <li className="dropdown-menu__item" ><button>Turntables</button></li>
            <li className="dropdown-menu__item" ><button>Integrated</button></li>
            <li className="dropdown-menu__item" ><button>Power Amplifiers</button></li>
            <li className="dropdown-menu__item" ><button>Tube Amplifiers</button></li>
            </ul>
        )}


     </div>
     );
}


 
export default Dropdown;