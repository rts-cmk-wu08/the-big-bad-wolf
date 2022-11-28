import { Outlet } from 'react-router-dom';
import "./main.scss"

const Main = () => {

    return ( 

        <main className="main">

            <Outlet />

        </main>

     );
     
}
 
export default Main;