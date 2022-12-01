import { Outlet } from 'react-router-dom';

const Main = () => {

    return ( 

        <main className="main container">

            <Outlet />

        </main>

     );
     
}
 
export default Main;